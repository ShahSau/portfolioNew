import { FC } from "react";
import About from "@/app/section/About";
import Hero from "@/app/section/Hero";
import JobTimeline from "@/app/section/JobTimeline";
import Projects from "@/app/section/Projects";
import TerminalContact from "@/app/section/TerminalContact";
import { Sidebar } from "@/components/Nav/SideBar";
import { SlideTabsAll } from "@/components/Nav/SlideTabsAll";

const Home: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/**Sidebar in medium or bigger screen*/}
      <Sidebar />

      <main className="flex-1">
        {/**Tabs in smaller screen*/}
        <SlideTabsAll />
        <div className="p-4 lg:ml-52">
          {/**Hero section */}
          <Hero />
          {/**About section */}
          <About />
          {/**Job Experience Timeline */}
          <JobTimeline />

          {/**Projects section */}
          <Projects />
          {/**Contact section */}
          <TerminalContact />
        </div>
      </main>
    </div>
  );
};

export default Home;
