import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository'
import { DeleteFeedbackUseCase } from '@/use-cases/delete-feedback-use-case'

type MakeDeleteFeedbackUseCaseTypes = {
  prismaFeedbacksRepository: PrismaFeedbacksRepository;
  deleteFeedbackUseCase: DeleteFeedbackUseCase;
};

export function makeDeleteFeedbackUseCase (): MakeDeleteFeedbackUseCaseTypes {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const deleteFeedbackUseCase = new DeleteFeedbackUseCase(
    prismaFeedbacksRepository
  )

  return {
    prismaFeedbacksRepository,
    deleteFeedbackUseCase
  }
}
