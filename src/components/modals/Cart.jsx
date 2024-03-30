import { useState, useEffect } from "react";
import { Link } from "wouter";

function Cart({ setLogInModal, setRegisterModal, setCartModal, user }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <>
      <div
        className="fixed h-full inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end "
        onClick={() => setCartModal(false)}
      >
        <section className="h-full bg-slate-500 rounded-xl w-2/3" onClick={(e) => {
              e.stopPropagation();}}>
            {user ? (
              <></>
            ) : (
              <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-10 w-full mt-36 sm:mt-26">{cart.products.map((product, index) => (
                  <Link
                    onClick={() =>
                      setCartModal(false)
                    }
                    href={"/product/" + product.id}
                    key={index}
                    className="text-black hover:cursor-pointer flex justify-center"
                  >
                    {" "}
                    {/* Estilo para cada producto */}
                    <div className="hover:text-cyan-500">
                      <img
                        className="w-10"
                        src={product.images}
                        alt={product.title}
                      />
                      <h3 className="text-md capitalize ">{product.title}</h3>
                      <p className="text-xl text-black">$ {product.price}</p>
                      <p className="text-xl text-black">Unidades: {product.units}</p>
                    </div>
                  </Link>
                ))}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-10 w-full mt-36 sm:mt-26">
                <button onClick={() => setLogInModal(true)}>
                  Iniciar sesión
                </button>
                <button onClick={() => setRegisterModal(true)}>
                  Registrarse
                </button>
                <button onClick={() => localStorage.removeItem("cart")}>
                  limpiar localStorage
                </button>
                </div>
              </>
            )}
          
        </section>
      </div>
    </>
  );
}

export default Cart;
