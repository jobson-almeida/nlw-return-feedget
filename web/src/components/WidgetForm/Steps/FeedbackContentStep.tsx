import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { FeedbackEvaluationStep } from "./FeedbackEvaluationStep";
import { ScreenshotButton } from "../ScreenshotButton";
import { api } from "../../../service/api";
import { Header } from "../../Header";
import { Loading } from "../../Loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
  onFeedbackError: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
  onFeedbackError,
}: FeedbackContentStepProps) {
  const [comment, setComment] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);

    await api
      .post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot,
      })
      .catch((err) => {
        console.log(err.message);
        onFeedbackError();
      });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <Header
        feedbackTypeInfo={feedbackTypeInfo}
        onFeedbackRestartRequested={onFeedbackRestartRequested}
      />
      <form className="mt-4 w-full" onSubmit={handleSubmitFeedback}>
        {feedbackType !== "EVALUATION" ? (
          <textarea
            className="form-textarea mb-[1.5px] min-h-[112px] w-full resize-none rounded-md border-zinc-600 bg-[#ffffff] bg-transparent text-sm text-[#71717a] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:bg-surface-primary dark:text-secondary"
            placeholder="Conte-nos com detalhes o que está acontecendo"
            onChange={(event) => setComment(event.target.value)}
          />
        ) : (
          <FeedbackEvaluationStep onChange={setComment} />
        )}
        <div className="mb-4 flex w-full flex-1">
          {feedbackType !== "EVALUATION" && (
            <ScreenshotButton
              screenshot={screenshot}
              onScreenshotTook={setScreenshot}
            />
          )}
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="flex h-10 w-full items-center justify-center rounded-[4px] border-transparent bg-brand text-sm text-on-brand-color transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[#ffffff] disabled:opacity-50 hover:bg-brand-hover disabled:hover:bg-brand dark:focus:ring-offset-zinc-900"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </div>
      </form>
    </>
  );
}
