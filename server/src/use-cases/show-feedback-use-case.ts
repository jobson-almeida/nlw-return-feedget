import { FeedbacksRepository } from '@/repositories/feedbacks-repositories'

export class ShowFeedbackUseCase {
  constructor (private feedbacksRepository: FeedbacksRepository) {}

  async execute (id: string) {
    return await this.feedbacksRepository.findById(id)
  }
}
