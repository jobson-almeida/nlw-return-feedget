import { CloseButton } from "../../CloseButton";

interface FeedbackRestartRequestedProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackErrorStep({
  onFeedbackRestartRequested,
}: FeedbackRestartRequestedProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex w-[304px] flex-col items-center py-10">
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.501 0.50025C8.56 0.50025 0.500999 8.55925 0.500999 18.5003C0.500999 28.4413 8.56 36.5003 18.501 36.5003C28.442 36.5003 36.501 28.4413 36.501 18.5003C36.501 8.55925 28.442 0.50025 18.501 0.50025ZM31.501 18.5003C31.501 21.0653 30.748 23.4503 29.466 25.4653L11.537 7.53625C13.551 6.25325 15.936 5.50025 18.501 5.50025C25.681 5.50025 31.501 11.3213 31.501 18.5003ZM5.501 18.5003C5.501 15.9353 6.254 13.5503 7.537 11.5363L25.466 29.4653C23.451 30.7473 21.066 31.5003 18.501 31.5003C11.322 31.5003 5.501 25.6802 5.501 18.5003Z"
            fill="#DD2E44"
          />
        </svg>
        <span className="text-x1 mt-2 text-[#27272a] dark:text-primary">
          Desculpa, algo deu errado!
        </span>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="mt-6 rounded-md border-transparent bg-[#f4f4f5] py-2 px-6 text-sm leading-6 text-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[#ffffff] hover:bg-[#e4e4e7] dark:bg-surface-secondary dark:text-primary dark:focus:ring-offset-zinc-900 dark:hover:bg-surface-secondary-hover"
        >
          Tentar novamente
        </button>
      </div>
    </>
  );
}
