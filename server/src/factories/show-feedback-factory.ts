import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository'
import { ShowFeedbackUseCase } from '@/use-cases/show-feedback-use-case'

type MakeShowFeedbackUseCaseTypes = {
  prismaFeedbacksRepository: PrismaFeedbacksRepository;
  showFeedbackUseCase: ShowFeedbackUseCase;
};

export function makeShowFeedbackUseCase (): MakeShowFeedbackUseCaseTypes {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const showFeedbackUseCase = new ShowFeedbackUseCase(
    prismaFeedbacksRepository
  )

  return {
    prismaFeedbacksRepository,
    showFeedbackUseCase
  }
}
