import { MailAdapter } from "@/adapters/mail-adapter";
import { FeedbacksRepository } from "@/repositories/feedbacks-repositories";

interface CreateFeedbackUseCaseProps {
  type: string;
  comment: string;
  screenshot?: string | undefined;
}

export class CreateFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) { }

  async execute(request: CreateFeedbackUseCaseProps) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("type is required");
    }

    if (!comment) {
      throw new Error("comment is required");
    }

    if (screenshot) {
      const hasDataURI = screenshot.search("data:image/png;base64,")
      const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      const screenshotTest = screenshot.replace("data:image/png;base64,", "")

      if (hasDataURI === -1 || !base64regex.test(screenshotTest)) {
        throw new Error("invalid screenshot");
      }
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" style="align: center; width: calc(100vw - (25px))"></img>` : null,
        "</div>",
      ].join("\n"),
    });
  }
}
