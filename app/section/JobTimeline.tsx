"use client"
import TimelineItems from '../../components/JobTimeline/TimelineItems'

const JobTimeline=()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto ">
        <h1 className="mb-8 text-center text-3xl font-extrabold text-transparent sm:mb-12 sm:text-4xl">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
            My Professional Journey
          </span>
        </h1>
        <div className="rounded-3xl bg-opacity-80 p-4 shadow-2xl backdrop-blur-lg backdrop-filter sm:p-8">
          <TimelineItems />
        </div>
      </div>
    </div>
  )
}

export default JobTimeline