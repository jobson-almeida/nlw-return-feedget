import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository'
import { UpdateFeedbackUseCase } from '@/use-cases/update-feedback-use-case'

type MakeUpdateFeedbackUseCaseTypes = {
  prismaFeedbacksRepository: PrismaFeedbacksRepository;
  updateFeedbackUseCase: UpdateFeedbackUseCase;
};

export function makeUpdateFeedbackUseCase (): MakeUpdateFeedbackUseCaseTypes {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const updateFeedbackUseCase = new UpdateFeedbackUseCase(
    prismaFeedbacksRepository
  )

  return {
    prismaFeedbacksRepository,
    updateFeedbackUseCase
  }
}
