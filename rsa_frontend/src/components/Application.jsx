'use client'
import React, { useState } from 'react';

const Application = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    jobDescription: '',
    resume: '',
    applicationDeadline: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-10 py-3">
          <div className="flex items-center gap-4 text-gray-900">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-tight">JobTrackr</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-gray-900 text-sm font-medium leading-normal hover:text-blue-600 transition-colors" href="#">Dashboard</a>
              <a className="text-gray-900 text-sm font-medium leading-normal hover:text-blue-600 transition-colors" href="#">Applications</a>
              <a className="text-gray-900 text-sm font-medium leading-normal hover:text-blue-600 transition-colors" href="#">Settings</a>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgUtY0ns6y4j2F1JR6SUAdoWd6R5TQMgEyWy7qisGLzjox1o1Mao5PGUQ23nHC6DTDVOfHBq94uuKSinrsAB6af9Uzm3nK6FLGbMh-ItJabn0yxGo4ixEi3F-WY4tEOs3O8es3u4paifteIlA4x23HKIh7oNnnIvAommH6UO1iuiik09ITnye8sQnVH-jYnVMpVeb_PWAyiQWFm49uoXrBX0Axt_iN8tgTj319FI67pcodMD9zN39eIM0zKbGwLGnEG1ZHziQ9o9E")`
              }}
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-gray-900 text-[32px] font-bold leading-tight min-w-72">New Application</p>
            </div>
            
            {/* Company Name */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Company Name</p>
                <input
                  type="text"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 placeholder:text-gray-500 px-4 py-3 text-base font-normal leading-normal"
                />
              </div>
            </div>

            {/* Role */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Role</p>
                <input
                  type="text"
                  placeholder="Enter role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 placeholder:text-gray-500 px-4 py-3 text-base font-normal leading-normal"
                />
              </div>
            </div>

            {/* Job Description */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Job Description</p>
                <textarea
                  placeholder="Paste job description"
                  value={formData.jobDescription}
                  onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 min-h-36 placeholder:text-gray-500 px-4 py-3 text-base font-normal leading-normal resize-none"
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Resume</p>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleInputChange('resume', e.target.files[0]?.name || '')}
                    className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 px-4 py-3 text-base font-normal leading-normal file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Application Deadline */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Application Deadline</p>
                <input
                  type="date"
                  value={formData.applicationDeadline}
                  onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 px-4 py-3 text-base font-normal leading-normal"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex px-4 py-3">
              <button
                onClick={handleSubmit}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-blue-600 text-gray-50 text-sm font-bold leading-normal tracking-wide hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="truncate">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;