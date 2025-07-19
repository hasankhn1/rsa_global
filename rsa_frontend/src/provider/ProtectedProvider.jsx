'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const ProtectedContext = React.createContext();
export const ProtectedProvider = ({ children }) => {
const router = useRouter();
  useEffect(() => {
    const authId = localStorage.getItem('auth_id');
    if (!authId){
        router.push('/')
    }
  },[])

  return (
    <ProtectedContext.Provider value={[]}>
      {children}
    </ProtectedContext.Provider>
  );
};