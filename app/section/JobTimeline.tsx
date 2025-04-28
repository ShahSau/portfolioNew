"use client";
import { FC } from "react";
import TimelineItems from "../../components/JobTimeline/TimelineItems";

const JobTimeline: FC = () => {
  return (
    <div
      id="experience"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 md:px-6 lg:px-8"
    >
      <div className="mx-auto ">
        <h1 className="mb-8 text-center text-3xl font-extrabold text-transparent md:mb-12 md:text-4xl">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
            My Professional Journey
          </span>
        </h1>
        <div className="rounded-3xl p-4 shadow-2xl backdrop-blur-lg backdrop-filter md:p-8">
          <TimelineItems />
        </div>
      </div>
    </div>
  );
};

export default JobTimeline;
