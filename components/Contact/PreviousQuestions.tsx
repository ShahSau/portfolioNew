import { CircleCheck } from "lucide-react";
import { Fragment } from "react";
import { PreviousQuestionProps } from "./types/interface";

const PreviousQuestions = ({
  questions,
}: PreviousQuestionProps): JSX.Element => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ""}
                {q.postfix && (
                  <span className="text-violet-300">{q.postfix}</span>
                )}
              </p>
              <p className="text-emerald-300">
                <CircleCheck className="inline-block mr-2" />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

export default PreviousQuestions;
