import { NodemailerMailAdapter } from '@/adapters/nodemailer/nodemailer-mail-adater'
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository'
import { CreateFeedbackUseCase } from '@/use-cases/create-feedback-use-case'

type MakeCreateFeedbackUseCaseTypes = {
  prismaFeedbacksRepository: PrismaFeedbacksRepository;
  createFeedbackUseCase: CreateFeedbackUseCase;
};

export function makeCreateFeedbackUseCase(): MakeCreateFeedbackUseCaseTypes {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const createFeedbackUseCase = new CreateFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  return {
    prismaFeedbacksRepository,
    createFeedbackUseCase
  }
}
