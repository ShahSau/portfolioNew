
import { FC } from "react";
import About  from "@/app/section/About";
import Hero from "@/app/section/Hero";
import JobTimeline from "@/app/section/JobTimeline";
import TerminalContact from "@/app/section/Terminal";
import { Sidebar } from "@/components/SideBar";
import { SlideTabsAll } from "@/components/SlideTabs";

const Home: FC = () => {
  return (
    <div className="flex">
      {/**Sidebar in medium or bigger screen*/}
      <Sidebar />
      
      <main className="flex-1">
        {/**Tabs in smaller screen*/}
        <SlideTabsAll />
        <div className="p-4 md:p-8 md:ml-64">
          {/**Hero section */}
          <Hero />
          {/**About section */}
          <About />
          {/**Job Experience Timeline */}
          <JobTimeline />

          {/**Contact section */}
          <TerminalContact />
            
        </div>
       
      </main>
    </div>
  );
}

export default Home;
