function Cart({ setLogInModal, setRegisterModal, setCartModal, user }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end "
        onClick={() => setCartModal(false)}
      >
        <section className="h-screen grid grid-rows-4 bg-slate-500 rounded-xl ">
          <div
            className="h-full rounded p-10 bg-black-900"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
           
            <button onClick={() => setCartModal(false)}>Cerrar Carrito</button>
            {user
              ? ("")
              : (<>
                  <button onClick={() => setLogInModal(true)}>
                    Iniciar sesión
                  </button>
                  <button onClick={() => setRegisterModal(true)}>
                    Registrarse
                  </button>
                  <button onClick={() => localStorage.removeItem('cart')}>
                    limpiar localStorage
                  </button>
                  </>
                )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
