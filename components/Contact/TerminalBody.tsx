import { useState } from "react";
import { QuestionType, TerminalBodyProps } from "./types/interface";
import InitialText from "./InitialText";
import PreviousQuestions from "./PreviousQuestions";
import CurrentQuestion from "./CurrentQuestion";
import CurLine from "./CurLine";
import Summary from "./Summary";


const QUESTIONS: QuestionType[] = [
    {
      key: "email",
      text: "To start, could you give us ",
      postfix: "your email address?",
      complete: false,
      value: "",
    },
    {
      key: "name",
      text: "Awesome! And what's ",
      postfix: "your good name?",
      complete: false,
      value: "",
    },
    {
      key: "description",
      text: "Perfect, and ",
      postfix: "how can we help you?",
      complete: false,
      value: "",
    },
  ];


const TerminalBody = ({ containerRef, inputRef }: TerminalBodyProps) => {
    const [focused, setFocused] = useState(false);
    const [text, setText] = useState("");
  
    const [questions, setQuestions] = useState(QUESTIONS);
  
    const curQuestion = questions.find((q) => !q.complete);
  
    const handleSubmitLine = (value: string) => {
      if (curQuestion) {
        setQuestions((pv) =>
          pv.map((q) => {
            if (q.key === curQuestion.key) {
              return {
                ...q,
                complete: true,
                value,
              };
            }
            return q;
          })
        );
      }
    };
  
    return (
      <div className="p-2 text-slate-100 text-lg">
        <InitialText />
        <PreviousQuestions questions={questions} />
        <CurrentQuestion curQuestion={curQuestion} />
        {curQuestion ? (
          <CurLine
            text={text}
            focused={focused}
            setText={setText}
            setFocused={setFocused}
            inputRef={inputRef}
            command={curQuestion?.key || ""}
            handleSubmitLine={handleSubmitLine}
            containerRef={containerRef}
          />
        ) : (
          <Summary questions={questions} setQuestions={setQuestions} />
        )}
      </div>
    );
  };

export default TerminalBody;