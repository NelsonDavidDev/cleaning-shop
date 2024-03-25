import HomePage from './screens/HomePage'
import ProductPage  from "./screens/ProductPage"
import NavBar from './components/NavBar';
import LogInModal from "./components/modals/LogInModal";
import RegisterModal from "./components/modals/RegisterModal";
import { Route } from "wouter";
import { useState } from "react";
import AdminPanel from "./screens/AdminPanel";

function App() {
  const [loginModal, setLogInModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [user, setUser] = useState(null)
  return (
    <>
    <NavBar setLogInModal={setLogInModal} setRegisterModal={setRegisterModal} setUser={setUser} user={user}/>
    <Route path='/adminpanel/' component={AdminPanel}/>
    <Route path='/' component={HomePage}/>
    <Route path='/product/:id'>
      {params => <ProductPage id={params.id} />}
    </Route>
    { loginModal ? <LogInModal setLogInModal={setLogInModal} setRegisterModal={setRegisterModal}/> : ("") }
    { registerModal ? <RegisterModal setLogInModal={setLogInModal} setRegisterModal={setRegisterModal}/> : ("") }
    </>
  )
}

export default App