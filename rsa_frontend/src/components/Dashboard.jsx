'use client';
import { Api } from '@/shared/api';
import React, { useEffect, useState } from 'react';
import Header from './Header';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);

  useEffect(() => {
    const getApplications = async () => {
      const data = await Api.client.get_applications();
      setApplications(data);
      setFilteredApplications(data);
    }
    getApplications()
  }, [])

  const onHandleFilter = (e) => {
    const filterData = applications.filter((ap) => ap.company_name.includes(e.target.value));
    setFilteredApplications(filterData);
  }
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight min-w-72">My Applications</p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#5c738a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search by company or role"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101418] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c738a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    onChange={onHandleFilter}
                  />
                </div>
              </label>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-gray-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="column-120 px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">Company</th>
                      <th className="column-240 px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">Role</th>
                      <th className="column-360 px-4 py-3 text-left text-[#101418] w-60 text-sm font-medium leading-normal">Status</th>
                      <th className="column-480 px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">
                        Deadline
                      </th>
                    </tr>
                  </thead>
                  {filteredApplications && filteredApplications.map((ap) => (
                    <tbody key={ap.id}>
                      <tr className="border-t border-t-[#d4dbe2]">
                        <td className="column-120 h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                          {ap.company_name}
                        </td>
                        <td className="column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                          {ap.role}
                        </td>
                        <td className="column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-full"
                          >
                            <span className="truncate">{ap.status}</span>
                          </button>
                        </td>
                        <td className="column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                          {ap.deadline}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;