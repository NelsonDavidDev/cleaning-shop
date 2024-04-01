import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";
import NavBar from "./components/NavBar";
import { Route } from "wouter";
import { useState } from "react";
import AdminPanel from "./screens/AdminPanel";
import LogInModal from "./components/modals/LogInModal";
import RegisterModal from "./components/modals/RegisterModal";
import Cart from "./components/modals/Cart";

function App() {
  const [loginModal, setLogInModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState(null);
  
  return (
    <>
      {cartModal ? (
        <Cart
          setLogInModal={setLogInModal}
          setRegisterModal={setRegisterModal}
          setCartModal={setCartModal}
          user={user}
        />
      ) : (
        ""
      )}
      {loginModal ? (
        <LogInModal
          setLogInModal={setLogInModal}
          setRegisterModal={setRegisterModal}
        />
      ) : (
        ""
      )}
      {registerModal ? (
        <RegisterModal
          loginModal={loginModal}
          setLogInModal={setLogInModal}
          setRegisterModal={setRegisterModal}
        />
      ) : (
        ""
      )}
      <NavBar
        setUser={setUser}
        user={user}
        loginModal={loginModal}
        setLogInModal={setLogInModal}
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
        setCartModal={setCartModal}
        cartModal={cartModal}
      />
      <Route path="/adminpanel/" component={AdminPanel} />
      <Route path="/" component={HomePage} />
      <Route path="/product/:id" user={user}>
        {(params) => <ProductPage id={params.id} />}
      </Route>
    </>
  );
}

export default App;
