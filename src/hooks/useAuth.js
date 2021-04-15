import { createContext, useContext, useState, useEffect } from 'react';
import { auth, init, authLogIn, authLogOut } from '../lib/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    init((user) => {
      setUser(user);
    });

    auth.on('login', setUser);

    return () => {
      auth.off('login', setUser);
    };
  }, []);

  const logIn = () => {
    authLogIn((user) => {
      setUser(user);
    });
  };

  const logOut = () => {
    authLogOut(() => {
      setUser(undefined);
    });
  };

  const contextVal = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextVal}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
