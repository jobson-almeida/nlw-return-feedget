import { FeedbacksRepository } from '@/repositories/feedbacks-repositories'

export class DeleteFeedbackUseCase {
  constructor (private feedbacksRepository: FeedbacksRepository) {}

  async execute (id: string) {
    return await this.feedbacksRepository.delete(id)
  }
}
