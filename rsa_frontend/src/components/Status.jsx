'use client';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Api } from '@/shared/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Status = ({ id }) => {
  const router = useRouter();
  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState('Interview');
  useEffect(() => {
    const getApplication = async () => {
      const data = await Api.client.get_application(id);
      setApplication(data);
    }
    getApplication()
  }, [id])
  const handleUpdate = async () => {
    try {
      console.log('here');
      await Api.client.update_application({ id, status })
      toast('Status updated successfully.')
      router.push('/tracker');
    } catch (error) {

    }
  }
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{
        '--radio-dot-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(63,127,191)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        '--select-button-svg': "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(92,115,138)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
        fontFamily: 'Inter, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight min-w-72">Update Application Status</p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101418] text-base font-medium leading-normal pb-2">Current Status: {application?.status}</p>
              </label>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  onChange={() => setStatus('Interview')}
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                  defaultChecked // Use defaultChecked in React for initial checked state
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Interview</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  onChange={() => setStatus('Offer')}
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Offer</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  onChange={() => setStatus('Rejected')}
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Rejected</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  onChange={() => setStatus('Withdrawn')}
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Withdrawn</p></div>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                onClick={handleUpdate}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3f7fbf] text-gray-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Update Status</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;