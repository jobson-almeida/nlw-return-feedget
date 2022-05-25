import { FeedbacksRepository } from '@/repositories/feedbacks-repositories'

interface UpdateFeedbackUseCaseRequest {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export class UpdateFeedbackUseCase {
  constructor (private feedbacksRepository: FeedbacksRepository) {}

  async execute (request: UpdateFeedbackUseCaseRequest) {
    const { id, type, comment, screenshot } = request

    await this.feedbacksRepository.update({
      id,
      type,
      comment,
      screenshot
    })
  }
}
