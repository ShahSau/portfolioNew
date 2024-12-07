import React, { MouseEventHandler } from "react";
import { Button } from "../ui/button";


interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ProjectButton = ({ children, onClick }: Props): JSX.Element => {
  return (
    <Button onClick={onClick} variant="default" size="lg">
      {children}
    </Button>
  );
}

export default ProjectButton;
