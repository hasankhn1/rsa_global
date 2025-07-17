'use client';

import React from 'react';
import { Bell } from 'lucide-react';
import Header from './Header';

const Tracker = () => {
  const applications = [
    {
      id: 1,
      company: "Tech Innovators Inc.",
      position: "Software Engineer",
      deadline: "2 days",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      company: "Global Solutions Co.",
      position: "Product Manager",
      deadline: "5 days",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      company: "Data Insights Corp.",
      position: "Data Analyst",
      deadline: "7 days",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      company: "Creative Minds Agency",
      position: "UX Designer",
      deadline: "10 days",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-gray-900 text-[32px] font-bold leading-tight min-w-72">Application Reminders</p>
            </div>            
            {applications.map((app) => (
              <div key={app.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-900 text-base font-bold leading-tight">{app.company}</p>
                      <p className="text-gray-500 text-sm font-normal leading-normal">{app.position}</p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-200 text-gray-900 text-sm font-medium leading-normal w-fit hover:bg-gray-300 transition-colors">
                      <span className="truncate">Deadline in {app.deadline}</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage: `url("${app.image}")`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;