import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "./CloseButton";

interface FeedbackContentStepProps {
  feedbackTypeInfo?: any;
  onFeedbackRestartRequested?: () => void;
  title?: string;
}

export function Header({
  feedbackTypeInfo,
  onFeedbackRestartRequested,
  title,
}: FeedbackContentStepProps) {
  return (
    <header>
      {title !== undefined ? (
        <>
          <span className="flex justify-center text-xl leading-6 text-[#27272a] dark:text-primary">
            {title}
          </span>
          <CloseButton />
        </>
      ) : (
        <>
          <button
            type="button"
            className="absolute top-5 left-5 text-[#71717a] hover:text-[#27272a] dark:text-secondary dark:hover:text-primary"
            onClick={onFeedbackRestartRequested}
          >
            <ArrowLeft weight="bold" className="h-4 w-4" />
          </button>
          <span className="relative flex justify-center gap-2 text-xl leading-6 text-[#27272a] dark:text-primary">
            <img
              src={feedbackTypeInfo.image.source}
              alt={feedbackTypeInfo.image.alt}
              className="h-6 w-6"
            />
            {feedbackTypeInfo.title}
          </span>

          {/* <button
            type="button"
            className=" top-5 left-5 text-[#71717a] hover:text-[#27272a] dark:text-secondary dark:hover:text-primary"
            onClick={onFeedbackRestartRequested}
          >
            <ArrowLeft weight="bold" className="h-4 w-4" />
          </button>
          <span className="inline-grid grid-cols-2 text-xl leading-6 text-[#27272a] dark:text-primary">
            <img
              src={feedbackTypeInfo.image.source}
              alt={feedbackTypeInfo.image.alt}
              className="h-6 w-6"
            />
            <span>{feedbackTypeInfo.title}</span>
          </span> */}
          <CloseButton />
        </>
      )}
    </header>
  );
}
