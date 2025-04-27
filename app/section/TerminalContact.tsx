"use client";
import { useRef, FC } from "react";
import TerminalBody from "../../components/Contact/TerminalBody";
import TerminalHeader from "../../components/Contact/TerminalHeader";

const TerminalContact: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section
      id="contact"
      className="px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono"
      >
        {/*Header */}
        <TerminalHeader />
        {/*Body */}
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

export default TerminalContact;
