import { useState, createContext, useContext, useEffect } from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1')
      .then(response => response.json())
      .then(res => {
        setUser(res);
        setLoading(false);
      });
  }, []);

  const value = {
    user: user,
    loading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
