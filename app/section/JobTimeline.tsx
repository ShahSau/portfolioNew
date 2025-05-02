"use client";
import { FC } from "react";
import TimelineItems from "../../components/JobTimeline/TimelineItems";
import Header from "@/components/Header";

const JobTimeline: FC = () => {
  return (
    <div
      id="experience"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 md:px-6 lg:px-8"
    >
      <Header
        tag="My Experience"
        title="A Journey Through My Career"
        desc0="Explore my professional journey and the milestones I've achieved."
        desc1="From internships to full-time roles, each experience has shaped my skills."
        desc2="I am always open to new opportunities and collaborations."
      />
      <div className="mx-auto ">
        <div className="rounded-3xl p-4 shadow-2xl backdrop-blur-lg backdrop-filter md:p-8">
          <TimelineItems />
        </div>
      </div>
    </div>
  );
};

export default JobTimeline;
