import {
  FeedbackOutput,
  FeedbacksRepository
} from '@/repositories/feedbacks-repositories'
import { randomUUID } from 'crypto'
import { CreateFeedbackUseCase } from '@/use-cases/create-feedback-use-case'

type FeedbackDataCreate = {
  id?: string;
  type: string;
  comment: string;
  screenshot?: string;
  created_at?: Date;
  updated_at?: Date;
};

export interface SendMailDataSpy {
  from: string;
  to: string;
  subject: string;
  body: string;
}

export interface IMailAdapterSpy {
  sendMail(data: SendMailDataSpy): Promise<void>;
}

class MailAdapterSpy implements IMailAdapterSpy {
  from: string = "user@email.com";
  to: string = "user@email.com";
  transport?: SendMailDataSpy;

  async sendMail({ subject, body }: SendMailDataSpy): Promise<void> {
    this.transport = {
      from: this.from,
      to: this.to,
      subject,
      body,
    }
  }
}

class FeedbacksRepositorySpy implements FeedbacksRepository {
  id = randomUUID()
  date = new Date()
  feedbackReceived?: FeedbackDataCreate
  createCount = 0
  feedbacksOutput: Array<FeedbackOutput> = []
  feedbackOutput!: FeedbackOutput

  async create(feedback: FeedbackDataCreate): Promise<void> {
    this.createCount++

    this.feedbackReceived = {
      id: this.id,
      type: feedback.type,
      comment: feedback.comment,
      screenshot: feedback.screenshot,
      created_at: this.date,
      updated_at: this.date
    }
  }

  async findAll(): Promise<Array<FeedbackOutput> | null> {
    return this.feedbacksOutput
  }

  async findById(id: string): Promise<FeedbackOutput | null> {
    this.id = id
    return this.feedbackOutput
  }

  async update(): Promise<void> { }

  async delete(id: string): Promise<void> {
    this.id = id
  }

  simulateCreateError(): void {
    jest
      .spyOn(FeedbacksRepositorySpy.prototype, 'create')
      .mockRejectedValueOnce(() => {
        throw new Error()
      })
  }
}

type MakeSutTypes = {
  sutCreate: CreateFeedbackUseCase;
  feedbacksRepository: FeedbacksRepositorySpy;
};

const makeSut = (): MakeSutTypes => {
  const feedbacksRepository = new FeedbacksRepositorySpy()
  const mailAdapter = new MailAdapterSpy
  const sutCreate = new CreateFeedbackUseCase(feedbacksRepository, mailAdapter)
  // const sutSelect = new SelectFeedbacks(feedbacksRepositorySpy);
  // const sutShow = new ShowFeedback(feedbacksRepositorySpy);
  // const sutUpdate = new UpdateFeedback(feedbacksRepositorySpy);
  // const sutDelete = new DeleteFeedback(feedbacksRepositorySpy);
  return {
    sutCreate,
    // sutSelect,
    // sutShow,
    // sutUpdate,
    // sutDelete,
    feedbacksRepository
  }
}

const imageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABGSURBVHhe7cEBAQAAAIIg/69uSEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCvBsCAAAGnoO97AAAAAElFTkSuQmCC"
const imageBase64Wrong1 = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABGSURBVHhe7cEBAQAAAIIg/69uSEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCvBsCAAAGnoO97AAAAAElFTkSuQmCC"
const imageBase64Wrong2 = "data:image/png;base64,iVBOR..."

const feedback = (): FeedbackDataCreate => {
  const date = new Date();
  return {
    id: 'id',
    type: 'type',
    comment: 'comment',
    screenshot: imageBase64,
    created_at: date,
    updated_at: date
  }
}

describe('Create feedback', () => {
  it('should be able to create feedback without errors', async () => {
    const { sutCreate } = makeSut()
    const result = sutCreate.execute(feedback())
    await expect(result).resolves.not.toThrow()
  })

  it('should not be able to create feedback after error', async () => {
    const { sutCreate, feedbacksRepository } = makeSut()
    feedbacksRepository.simulateCreateError()
    const result = sutCreate.execute(feedback())
    await expect(result).rejects.toThrow()
  })

  it('should not be able to create feedback without setting the required Type', async () => {
    const { sutCreate } = makeSut()
    const feedback = (): FeedbackDataCreate => {
      return {
        type: '',
        comment: 'comment',
        screenshot: imageBase64,
      }
    }
    const result = sutCreate.execute(feedback())
    await expect(result).rejects.toThrow()
  })

  it('should not be able to create feedback without setting the required Comment', async () => {
    const { sutCreate } = makeSut()
    const feedback = (): FeedbackDataCreate => {
      return {
        type: 'type',
        comment: '',
        screenshot: imageBase64,
      }
    }
    const result = sutCreate.execute(feedback())
    await expect(result).rejects.toThrow()
  })

  it('should not be able to create feedback without setting the required Type and Comment', async () => {
    const { sutCreate } = makeSut()
    const feedback = (): FeedbackDataCreate => {
      return {
        type: '',
        comment: '',
        screenshot: imageBase64,
      }
    }
    const result = sutCreate.execute(feedback())
    await expect(result).rejects.toThrow()
  })

  it('should be able to create the same feedback without setting the Screenshort', async () => {
    const { sutCreate } = makeSut()
    const feedback = (): FeedbackDataCreate => {
      return {
        type: 'type',
        comment: 'comment',
        screenshot: '',
      }
    }
    const result = sutCreate.execute(feedback())
    await expect(result).resolves.not.toThrow()
  })

  it('should not be able to create feedback without the Screenshot uri data', async () => {
    const { sutCreate } = makeSut()
    const feedback = (): FeedbackDataCreate => {
      return {
        type: 'type',
        comment: 'comment',
        screenshot: imageBase64Wrong1,
      }
    }
    const result = sutCreate.execute(feedback())
    await expect(result).rejects.toThrow()
  })

  it('should not be able to create feedback with invalid Screenshot', async () => {
    const { sutCreate } = makeSut()
    const feedback = (): FeedbackDataCreate => {
      return {
        type: 'type',
        comment: 'comment',
        screenshot: imageBase64Wrong2,
      }
    }
    const result = sutCreate.execute(feedback())
    await expect(result).rejects.toThrow()
  })

  it('should be able to create feedback from generating Id, creation date and update', async () => {
    const { sutCreate, feedbacksRepository } = makeSut()
    await sutCreate.execute(feedback())
    expect(feedbacksRepository.feedbackReceived?.id).not.toBeNull()
    expect(feedbacksRepository.feedbackReceived?.created_at).not.toBeNull()
    expect(feedbacksRepository.feedbackReceived?.updated_at).not.toBeNull()
  })

  it('should be able to create feedback with Type and Comment as received', async () => {
    const { sutCreate, feedbacksRepository } = makeSut()

    await sutCreate.execute(feedback())
    expect(feedbacksRepository.feedbackReceived?.type).toEqual(
      feedback().type
    )
    expect(feedbacksRepository.feedbackReceived?.comment).toEqual(
      feedback().comment
    )
  })
})
