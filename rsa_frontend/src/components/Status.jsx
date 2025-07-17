import React from 'react';

const Status = () => {
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
            <div className="flex items-center gap-9">
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Applications</a>
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Companies</a>
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Network</a>
              <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Resources</a>
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
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
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW02__SHw51nZLJFMZtnQvMRKEbMMZV7ysZvIKfm0rUrmlwoB669M3cCuhUd9bpivR9Kprk9BCaHptagu0X9qwTwWuw6UKCQ3JIhwczyZKatwwhZVUNifBGB1JRdehU9Q_UxuV00sbAJ70makEy5Cnh0Jc997fyDJmqHYEabKfXGQ_F1eNiiMTVdumYdNR8PyvYNgWwjZEPmZN7pN-gjz2X8ch4NOqbSmrZ0xATcvvDIYE4FpTffPZjAHu4IL1pBuVsc0khaDDuzs")' }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight min-w-72">Update Application Status</p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101418] text-base font-medium leading-normal pb-2">Current Status</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101418] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#5c738a] p-4 text-base font-normal leading-normal"
                  defaultValue="one" // Added defaultValue for React select
                >
                  <option value="one"></option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                  defaultChecked // Use defaultChecked in React for initial checked state
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Interview</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Offer</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Rejected</p></div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d4dbe2] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d4dbe2] bg-transparent text-transparent checked:border-[#3f7fbf] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#3f7fbf]"
                  name="bac40dc0-c81d-4e37-9677-0b51612dfc72"
                />
                <div className="flex grow flex-col"><p className="text-[#101418] text-sm font-medium leading-normal">Withdrawn</p></div>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
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