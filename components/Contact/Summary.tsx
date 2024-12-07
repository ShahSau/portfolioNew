import { useState } from "react";
import { SummaryProps } from "./types/interface";
import { CircleCheck } from "lucide-react";


const Summary = ({ questions, setQuestions }: SummaryProps) => {
    const [complete, setComplete] = useState(false);
  
    const handleReset = () => {
      setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
    };
  
    const handleSend = () => {
      const formData = questions.reduce((acc, val) => {
        return { ...acc, [val.key]: val.value };
      }, {});
  
      // Send this data to your server or whatever :)
      console.log(formData);
  
      setComplete(true);
    };
  
    return (
      <>
        <p>Beautiful! Here&apos;s what we&apos;ve got:</p>
        {questions.map((q) => {
          return (
            <p key={q.key}>
              <span className="text-blue-300">{q.key}:</span> {q.value}
            </p>
          );
        })}
        <p>Look good?</p>
        {complete ? (
          <p className="text-emerald-300">
            <CircleCheck className="inline-block mr-2" />
            <span>Sent! We&apos;ll get back to you ASAP 😎</span>
          </p>
        ) : (
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleReset}
              className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-slate-100 text-black"
            >
              Restart
            </button>
            <button
              onClick={handleSend}
              className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-indigo-500 text-white"
            >
              Send it!
            </button>
          </div>
        )}
      </>
    );
  };

export default Summary;