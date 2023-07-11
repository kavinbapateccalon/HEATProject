import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
