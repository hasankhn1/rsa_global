'use client';
import React from 'react';

const Dashboard = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
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
                    value=""
                    readOnly // Added readOnly as value is empty and not handled by state
                  />
                </div>
              </label>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#d4dbe2] bg-gray-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120 px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">Company</th>
                      <th className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-240 px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">Role</th>
                      <th className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360 px-4 py-3 text-left text-[#101418] w-60 text-sm font-medium leading-normal">Status</th>
                      <th className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480 px-4 py-3 text-left text-[#101418] w-[400px] text-sm font-medium leading-normal">
                        Deadline
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#d4dbe2]">
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                        Tech Innovations Inc.
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Applied</span>
                        </button>
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        2024-03-15
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d4dbe2]">
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                        Global Solutions Ltd.
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        Product Manager
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Interviewing</span>
                        </button>
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        2024-03-22
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d4dbe2]">
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                        Creative Minds Co.
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        UX Designer
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Rejected</span>
                        </button>
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        2024-03-08
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d4dbe2]">
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                        Data Dynamics Corp.
                      </td>
                      <td className="table-24872186-e3d79ede258b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        Data Analyst
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Offer Received</span>
                        </button>
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        2024-03-29
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d4dbe2]">
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101418] text-sm font-normal leading-normal">
                        Future Systems LLC
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        AI Specialist
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaedf1] text-[#101418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Applied</span>
                        </button>
                      </td>
                      <td className="table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c738a] text-sm font-normal leading-normal">
                        2024-04-05
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* The following style block is for demonstration. In a real React app with Tailwind,
                  you'd typically use responsive classes directly in your JSX or
                  manage complex responsive behaviors with a utility like `react-responsive`.
                  For these specific breakpoints and display changes, you might also
                  consider using custom Tailwind CSS variants or a separate CSS module if
                  you truly need `@container` specific behavior with static widths. */}
              <style>{`
                @container(max-width:120px){.table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-120{display: none;}}
                @container(max-width:240px){.table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-240{display: none;}}
                @container(max-width:360px){.table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-360{display: none;}}
                @container(max-width:480px){.table-24872186-e3ae-4662-ae5f-d3d79ede258b-column-480{display: none;}}
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;