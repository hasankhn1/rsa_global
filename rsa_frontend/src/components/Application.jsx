'use client'
import React, { useState } from 'react';
import Header from './Header';
import { Api } from '@/shared/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { generateCoverLetter } from './OpenAi';

const Application = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    role: '',
    job_description: '',
    deadline: '',
    resume: '',
    cover_letter: ''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenerate = async () => {
    if (!formData.resume) return;
    setLoading(true);
    const resumeText = await formData.resume.text();
    const coverLetterText = await generateCoverLetter({
      resumeText,
      jobTitle: formData.role
    });
    handleInputChange('cover_letter', coverLetterText);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("company_name", formData.company_name);
    body.append("role", formData.role);
    body.append("job_description", formData.job_description);
    body.append("cover_letter", formData.cover_letter);
    body.append("deadline", formData.deadline);
    body.append("resume", formData.resume); // actual file

    try {
      const res = await Api.client.application(body);
      toast('Your application is successfully uploaded');
      router.push('/tracker');
    } catch (error) {
      console.log(error)
      toast(error.message)
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-gray-900 text-[32px] font-bold leading-tight min-w-72">New Application</p>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Company Name</p>
                <input
                  type="text"
                  placeholder="Enter company name"
                  value={formData.company_name}
                  onChange={(e) => handleInputChange('company_name', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 placeholder:text-gray-500 px-4 py-3 text-base font-normal leading-normal"
                />
              </div>
            </div>
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

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Job Description</p>
                <textarea
                  placeholder="Paste job description"
                  value={formData.job_description}
                  onChange={(e) => handleInputChange('job_description', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 min-h-36 placeholder:text-gray-500 px-4 py-3 text-base font-normal leading-normal resize-none"
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Resume</p>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleInputChange('resume', e.target.files[0] || '')}
                    className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 px-4 py-3 text-base font-normal leading-normal file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            </div>
            <div className="flex max-w-[900px] h[500px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Cover Letter
                <button className='ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleGenerate} disabled={!formData.resume}>
                  {loading ? 'Generating...' : 'Generate AI Cover Letter'}
              </button>
                </p>
                <textarea
                  placeholder="Cover letter"
                  value={formData.cover_letter}
                  onChange={(e) => handleInputChange('cover_letter', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 min-h-36 placeholder:text-gray-500 px-4 py-3 text-base font-normal leading-normal resize-none"
                />
              </div>
            </div>


            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-900 text-base font-medium leading-normal pb-2">Application Deadline</p>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  className="w-full rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 bg-gray-50 focus:border-gray-300 h-14 px-4 py-3 text-base font-normal leading-normal"
                />
              </div>
            </div>

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