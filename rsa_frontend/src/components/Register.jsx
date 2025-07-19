'use client';

import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Api } from '@/shared/api';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();
  const handleRegister = async () => {
    try {
      const data = await Api.client.register({ username, hashed_password: password, email, first_name: firstName, last_name: lastName, is_active: true })
      const authId = `${data.access} ${data.token}` 
      localStorage.setItem('auth_id', authId);
      toast('Welcome to JobTrackr');
      router.push('/application');
    } catch (error) {
      console.log(error)
      toast(error.message)
    }

  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <HomeHeader />
        <div className="px-40 flex flex-1 justify-center py-5 self-center">
          <div className="flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-gray-900 text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Welcome back
            </h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <input
                  type="text"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-200 focus:border-none h-14 placeholder:text-slate-600 p-4 text-base font-normal leading-normal"
                />
              </div>
              <div className="flex flex-col min-w-40 flex-1">
                <input
                  type="text"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-200 focus:border-none h-14 placeholder:text-slate-600 p-4 text-base font-normal leading-normal"
                />
              </div>
              <div className="flex flex-col min-w-40 flex-1">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-200 focus:border-none h-14 placeholder:text-slate-600 p-4 text-base font-normal leading-normal"
                />
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-200 focus:border-none h-14 placeholder:text-slate-600 p-4 text-base font-normal leading-normal"
                />
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-200 focus:border-none h-14 placeholder:text-slate-600 p-4 text-base font-normal leading-normal"
                />
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <button
                onClick={handleRegister}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-blue-600 text-gray-50 text-sm font-bold leading-normal tracking-wide hover:bg-blue-700 transition-colors"
              >
                <span className="truncate">Register</span>
              </button>
            </div>
            <p className="text-slate-600 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              <Link href={'/'}>
                <button className="underline hover:text-slate-800 transition-colors">
                  Already Signed up? Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;