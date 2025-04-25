import React, { MouseEventHandler } from "react";
import { Button } from "../ui/button";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const OutlineButton = ({ children, onClick }: Props): JSX.Element => {
  return (
    <Button onClick={onClick} variant="outline" size="lg" className="w-full">
      {children}
    </Button>
  );
};

export default OutlineButton;
