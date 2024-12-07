"use client"
import { useRef,FC } from "react";
import TerminalBody from "../../components/Contact/TerminalBody";
import TerminalHeader from "../../components/Contact/TerminalHeader";

const TerminalContact: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section
      style={{
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80)",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
      className="px-4 py-12 bg-gradient-to-br from-gray-100 to-gray-200"
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
