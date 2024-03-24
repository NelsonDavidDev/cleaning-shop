import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export function UserContextProvider(props) {
 
  const initialLoginState = localStorage.getItem('login') === 'false';

  const [login, setLogin] = useState(initialLoginState);

  useEffect(() => {
    localStorage.setItem('login', login);
  }, [login]);

  return (
      <UserContext.Provider value={{login, setLogin}}>
        {props.children}
      </UserContext.Provider>
  )
}