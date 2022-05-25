import { useState } from "react";
import { feedbackTypes } from "..";
import { Star } from "../../Star";

interface FeedbackEvaluationProps {
  onChange: (value: string) => void;
}

export function FeedbackEvaluationStep({ onChange }: FeedbackEvaluationProps) {
  const [valueIndex, setGradeIndex] = useState<number>(-1);
  const feedbackTypeEvaluationInfo = feedbackTypes.EVALUATION.CLASSIFICATION;

  return (
    <div className="mt-6 mb-14 flex h-10 w-full">
      {Object.entries(feedbackTypeEvaluationInfo).map(([key, value]) => {
        return (
          <Star
            id={value.id}
            key={value.id}
            title={value.subtitle}
            description={value.alt}
            changeGradeIndex={() => {
              setGradeIndex(value.id);
              onChange(value.name);
            }}
            style={valueIndex >= value.id ? "#FFAC33" : "none"}
          />
        );
      })}
    </div>
  );
}
