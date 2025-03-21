import { createContext, useState } from "react";

interface IAuthContext {
  user : IUserContext
  setUserState: (user: IUserContext) => void
  clearUser: () => void
  loggedIn: boolean
}

export interface IUserContext {
  name: string;
  id: string;
}

export const defaultUser: IUserContext = {
  name: '',
  id: '0',
};
  
export const AuthContext = createContext({} as IAuthContext);
  
export const AuthContextProvider = ({ children }: any) => {

  const initialUserState = () => {
    const userStorage = localStorage.getItem("user");
    if  (userStorage === null) {
      return defaultUser;
    }

   return JSON.parse(userStorage);
  }

  const setLoggedInitialState = () => {
    if (user.id !== '0') {
      return true;
    }
    return false;
  }

  const [user, setUser] = useState(initialUserState());
  const [loggedIn, setLoggedIn] = useState(setLoggedInitialState());

  const setUserState = (user: IUserContext) => {
    localStorage.setItem("user", JSON.stringify({'id': user.id, 'name': user.name}));
    setUser(user);
    setLoggedIn(true);
  }

  const clearUser = () => {
    localStorage.removeItem("user");
    setUser(defaultUser);
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{
      user,
      setUserState,
      clearUser, 
      loggedIn
    }}>
    {children}
    </AuthContext.Provider>
  )
}