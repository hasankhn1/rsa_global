'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Api } from '@/shared/api';
import { getDaysRemaining, getRandomImages } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';

const Tracker = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const getApplications = async () => {
      const data = await Api.client.get_applications();
      console.log(data);
      setApplications(data);
    }
    getApplications()
  }, [])


  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-gray-900 text-[32px] font-bold leading-tight min-w-72">Application Reminders</p>
            </div>
            {applications && applications.map((app) => (
              <div key={app.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-900 text-base font-bold leading-tight">{app.company_name}</p>
                      <p className="text-gray-500 text-sm font-normal leading-normal">{app.role}</p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-200 text-gray-900 text-sm font-medium leading-normal w-fit hover:bg-gray-300 transition-colors">
                      <span className="truncate">Deadline in {getDaysRemaining(app.deadline)} days</span>
                    </button>
                  </div>
                  <Link href={`/status/${app.id}`}>
                  <Image
                    src={getRandomImages()}
                    alt='Pro En Image'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className=' w-[150px] h-[100px] relative rtl:scale-x-[-1] border-2 border-gray-200 rounded-lg object-contain p-2 bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-green-400 hover:z-10 transform-gpu'
                  />
                  </Link>
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