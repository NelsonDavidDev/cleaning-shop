import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserContextProvider(props) {
 
  const [login, setLogin] = useState(false);
  return (
      <UserContext.Provider value={{login, setLogin}}>
        {props.children}
      </UserContext.Provider>
  )
}