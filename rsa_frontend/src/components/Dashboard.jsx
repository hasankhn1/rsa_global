'use client';
import React from 'react';

const Dashboard = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#101418]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em]">JobTrackr</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
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
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101418] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c738a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                  readOnly // Added readOnly as value is empty and not handled by state
                />
              </div>
            </label>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#eaedf1] text-[#101418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-[#101418]" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIBUfzeuybFspb6hujRjjrzImnswF9SI6BbR0A2hihCP0orWT3jmLKvDYWRfGKMpfVb14SvtlxrquPe0fLRWym6fJWDa0b9AzLznfvifh2YcvZGfEVZmZhw0gK1EBe4T9Im-iGnMKsH0h0wCxxAwyAiBtuFrz6Fbta5z_6tvNwSACmYgrnZpVsoZTzHl0RpO6LG9rSlGPYKrrPiSaWHWlfRrSzpJJc4oB3Cgx9UF9iPX6hUXPA71zHjfnXWiA4aWxTFIW_qOVBYEk")' }}
            ></div>
          </div>
        </header>
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