import React, { MouseEventHandler } from "react";
import { Button } from "../ui/button";

interface Props {
  children: string | JSX.Element;
}

const ProjectButton = ({ children }: Props): JSX.Element => {
  return (
    <Button
      variant="secondary"
      size="lg"
      className="w-full pointer-events-none"
    >
      {children}
    </Button>
  );
};

export default ProjectButton;
