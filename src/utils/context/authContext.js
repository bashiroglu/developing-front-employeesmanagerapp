import React, { createContext } from 'react';
import useAuthState from '../hooks/useAuthState';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [userObject, setUserObject, logout] = useAuthState({});
  return (
    <AuthContext.Provider value={{ userObject, setUserObject, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
