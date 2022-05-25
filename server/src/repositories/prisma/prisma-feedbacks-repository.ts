import { prisma } from '@/prisma'
import {
  FeedbackCreateData,
  FeedbackOutput,
  FeedbacksRepository,
  FeedbackUpdateData
} from '@/repositories/feedbacks-repositories'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create ({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }

  async findById (id: string): Promise<FeedbackOutput | null> {
    return await prisma.feedback.findFirst({ where: { id } })
  }

  async findAll (): Promise<Array<FeedbackOutput> | null> {
    return await prisma.feedback.findMany()
  }

  async update ({ id, type, comment, screenshot }: FeedbackUpdateData) {
    await prisma.feedback.update({
      where: {
        id
      },
      data: {
        type,
        comment,
        screenshot
      }
    })
  }

  async delete (id: string): Promise<void> {
    await prisma.feedback.delete({ where: { id } })
  }
}
