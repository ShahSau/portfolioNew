import {CurrentQuestionProps} from "./types/interface";

const CurrentQuestion = ({ curQuestion }: CurrentQuestionProps) => {
    if (!curQuestion) return <></>;
  
    return (
      <p>
        {curQuestion.text || ""}
        {curQuestion.postfix && (
          <span className="text-violet-300">{curQuestion.postfix}</span>
        )}
      </p>
    );
  };

export default CurrentQuestion;