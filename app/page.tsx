import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/SideBar";
import { SlideTabsAll } from "@/components/SlideTabs";
import Hero from "@/components/Hero";
import { About } from "@/components/About";

export default function Home() {
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
            
        </div>
       
      </main>
    </div>
  );
}
