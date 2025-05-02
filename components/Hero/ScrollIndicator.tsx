import React, { useEffect, useState } from "react";
import { MousePointer } from "lucide-react";

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator when user scrolls down
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{ left: "50%" }}
      className="fixed bottom-6 transform flex flex-col items-center animate-fade-in lg:left-[calc(55%+50px)]"
    >
      <div className="flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1 mb-2">
          <div className="w-1 h-2 bg-gray-600 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
