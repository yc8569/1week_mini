import axios from 'axios';
import React, { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (data) => {},
  logout: () => {},
  
});
console.log(AuthContext)
export const AuthContextProvider = (props) => {
  
  const [token, setToken] = useState(null);
    
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  console.log(token)
  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;