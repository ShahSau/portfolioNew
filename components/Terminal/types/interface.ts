import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface PreviousQuestionProps {
  questions: QuestionType[];
}

export type QuestionType = {
  key: string;
  text: string;
  postfix?: string;
  complete: boolean;
  value: string;
};

export interface CurrentLineProps {
  text: string;
  focused: boolean;
  setText: Dispatch<SetStateAction<string>>;
  setFocused: Dispatch<SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  command: string;
  handleSubmitLine: (value: string) => void;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

export interface SummaryProps {
  questions: QuestionType[];
  setQuestions: Dispatch<SetStateAction<QuestionType[]>>;
}

export interface TerminalBodyProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  t: any;
}

export interface CurrentQuestionProps {
  curQuestion: QuestionType | undefined;
}
