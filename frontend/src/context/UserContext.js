import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useLocalStorage("userName", "");

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
