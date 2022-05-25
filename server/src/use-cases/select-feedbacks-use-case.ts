import { FeedbacksRepository } from '@/repositories/feedbacks-repositories'

export class SelectFeedbacksUseCase {
  constructor (private feedbacksRepository: FeedbacksRepository) {}

  async execute () {
    return await this.feedbacksRepository.findAll()
  }
}
