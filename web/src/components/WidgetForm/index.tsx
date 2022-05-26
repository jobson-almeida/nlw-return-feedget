import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import evaluationImageUrl from "../../assets/evaluation.svg";
import otherImageUrl from "../../assets/other.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackErrorStep } from "./Steps/FeedbackErrorStep";
import { Footer } from "../Footer";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  EVALUATION: {
    title: "Avaliação",
    image: {
      source: evaluationImageUrl,
      alt: "Imagem de uma estrela",
    },
    CLASSIFICATION: {
      POOR: {
        id: 0,
        name: "Very bad",
        subtitle: "Péssima",
        alt: "Estrela que representa uma classificação péssima",
      },
      BAD: {
        id: 1,
        name: "Bad",
        subtitle: "Ruim",
        alt: "Estrela que representa uma classificação ruim",
      },
      GOOD: {
        id: 2,
        name: "Good",
        subtitle: "Boa",
        alt: "Classificação boa",
      },
      VERY_GOOD: {
        id: 3,
        name: "Very good",
        subtitle: "Muito boa",
        alt: "Estrela que representa uma classificação muito boa",
      },
      EXCELLENT: {
        id: 4,
        name: "Excellent",
        subtitle: "Excelente",
        alt: "Estrela que representa uma classificação excelente",
      },
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackError(false);
    setFeedbackType(null);
  }

  return (
    <div className="relative mb-4 flex h-[264px] w-[calc(100vw-32px)] min-w-[336px] flex-col items-center rounded-2xl bg-[#ffffff] p-4 font-inter shadow-3xl dark:bg-surface-primary md:w-auto">
      {feedbackError ? (
        <FeedbackErrorStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {feedbackSent ? (
            <FeedbackSuccessStep
              onFeedbackRestartRequested={handleRestartFeedback}
            />
          ) : (
            <>
              {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
              ) : (
                <FeedbackContentStep
                  feedbackType={feedbackType}
                  onFeedbackRestartRequested={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
                  onFeedbackError={() => setFeedbackError(true)}
                />
              )}
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}
