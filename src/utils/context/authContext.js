import React, { createContext } from 'react';
import useAuthState from '../hooks/useAuthState';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [userObject, setUserObject] = useAuthState({});
  return (
    <AuthContext.Provider value={{ userObject, setUserObject }}>
      {props.children}
    </AuthContext.Provider>
  );
}
