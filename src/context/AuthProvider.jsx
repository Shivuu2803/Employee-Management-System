import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [ userData, setUserData ] = useState(null);

  useEffect(()=> {
    setLocalStorage();
    
    // Load employee data into context
    const { employees } = getLocalStorage();
    setUserData(employees);
    
    const handleStorageChange = () => {
      const { employees: updatedEmployees } = getLocalStorage();
      setUserData(updatedEmployees);
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  },[]);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        { children }
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider