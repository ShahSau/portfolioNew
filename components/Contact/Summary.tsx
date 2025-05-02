import emailjs from "@emailjs/browser";
import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { SummaryProps } from "./types/interface";

const Summary = ({ questions, setQuestions }: SummaryProps): JSX.Element => {
  const [complete, setComplete] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleReset = (): void => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
  };

  const handleSend = (event: { preventDefault: () => void }): void => {
    const formData = questions.reduce((acc, val) => {
      return { ...acc, [val.key]: val.value };
    }, {});

    event.preventDefault();
    // Send this data to server
    // eslint-disable-next-line no-console
    emailjs
      .send(
        "service_dxkidye",
        "template_sndsd7q",
        formData,
        "user_mWLTYsv6XyFsKZpPyXJBc"
      )
      .then(
        function (response) {
          // eslint-disable-next-line no-console
          console.log("SUCCESS!", response.status, response.text);
          setComplete(true);
          setMessageSent(true);
        },
        function (error) {
          // eslint-disable-next-line no-console
          console.log("FAILED...", error);
          setComplete(true);
          setMessageError(true);
        }
      );
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
        messageSent ? (
          <p className="text-emerald-300">
            <CircleCheck className="inline-block mr-2" />
            <span>
              Sent! I got your message and will get back to you soon. 😎
            </span>
          </p>
        ) : (
          <>
            <p className="text-red-300">
              <span>Sorry, something went wrong 😞. Please try again. </span>
            </p>
            <button
              onClick={handleReset}
              className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-gray-300 text-black"
            >
              Restart
            </button>
          </>
        )
      ) : (
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleReset}
            className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-gray-300 text-black"
          >
            Clear
          </button>
          <button
            onClick={handleSend}
            className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-green-500 text-white"
          >
            Send it!
          </button>
        </div>
      )}
    </>
  );
};

export default Summary;
