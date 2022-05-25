import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository'
import { SelectFeedbacksUseCase } from '@/use-cases/select-feedbacks-use-case'

type MakeSelectFeedbacksUseCaseTypes = {
  prismaFeedbacksRepository: PrismaFeedbacksRepository;
  selectFeedbacksUseCase: SelectFeedbacksUseCase;
};

export function makeSelectFeedbacksUseCase (): MakeSelectFeedbacksUseCaseTypes {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

  const selectFeedbacksUseCase = new SelectFeedbacksUseCase(
    prismaFeedbacksRepository
  )

  return {
    prismaFeedbacksRepository,
    selectFeedbacksUseCase
  }
}
