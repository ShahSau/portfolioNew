import { FC } from "react";

interface InitialTextProps {
  t: any;
}

const InitialText: FC<InitialTextProps> = ({ t }) => {
  return (
    <>
      <p>{t.contact.initialText}</p>
      <p className="whitespace-nowrap overflow-hidden font-light">
        ------------------------------------------------------------------------
      </p>
    </>
  );
};

export default InitialText;
