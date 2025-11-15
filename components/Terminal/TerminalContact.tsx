"use client";
import { useRef } from "react";
import TerminalBody from "./TerminalBody";
import TerminalHeader from "./TerminalHeader";

interface TerminalContactProps {
  translation: any;
}

const TerminalContact: React.FC<TerminalContactProps> = ({ translation }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section
      id="contact"
      className="px-4 py-2"
    >
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="h-[28rem] bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono"
      >
        {/*Header */}
        <TerminalHeader />
        {/*Body */}
        <TerminalBody inputRef={inputRef} containerRef={containerRef} t={translation} />
      </div>
    </section>
  );
};

export default TerminalContact;
