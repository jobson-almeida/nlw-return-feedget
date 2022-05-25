import { FeedbackType, feedbackTypes } from "..";
import { Header } from "../../Header";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <Header title="Deixe seu feedback" />
      <div className="mt-8 mb-12 flex w-full gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            key !== "OTHER" && (
              <button
                key={key}
                type="button"
                className="flex h-28 w-24 flex-1 flex-col items-center rounded-lg border-2 border-transparent bg-[#f4f4f5] px-2 py-5 text-[#27272a] focus:border-brand focus:outline-none hover:border-brand dark:bg-surface-secondary dark:text-primary"
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span className="pt-2">{value.title}</span>
              </button>
            )
          );
        })}
      </div>
    </>
  );
}
