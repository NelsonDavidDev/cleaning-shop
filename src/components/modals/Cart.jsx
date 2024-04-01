import { useState, useEffect } from "react";
import { database } from "./../../firebase/config";
import { Link } from "wouter";
import { get, ref, child } from "firebase/database";

function Cart({ setLogInModal, setRegisterModal, setCartModal }) {
  const [productsDatabase, setProductsDatabase] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart.products);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queriedProductsArray = [];
        for (const product of cart) {
          const productRef = ref(database, `products/${product.id}`); // Ajusta la ruta según la estructura de tu base de datos
          const snapshot = await get(child(productRef, "/")); // Obtener la instantánea del documento
          if (snapshot.exists()) {
            const productData = snapshot.val(); // Obtener los datos del producto
            queriedProductsArray.push(productData);
          } else {
            console.log(`No se encontró ningún producto con ID ${product.id}`);
          }
        }
        setProductsDatabase(queriedProductsArray);
      } catch (error) {
        console.error("Error al consultar Firebase Realtime Database:", error);
      }
    };

    fetchData();
  }, [cart]);

  return (
    <>
      <div
        className="fixed h-full inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end "
        onClick={() => setCartModal(false)}
      >
        <section
          className="h-full bg-slate-500 rounded-xl w-2/3"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-10 w-full mt-36 sm:mt-26 xl:mt-32">
            {productsDatabase.map((product, index) => (
              <Link
                onClick={() => setCartModal(false)}
                href={"/product/" + product.id}
                key={index}
                className="text-black hover:cursor-pointer w-32 justify-center"
              >
                {" "}
                <div className="hover:text-cyan-500">
                  <img
                    className="w-10"
                    src={product.images}
                    alt={product.title}
                  />
                  <h3 className="text-sm capitalize ">{product.title}</h3>
                  $ {((product.price * cart[index].units) || 0).toLocaleString('es-CO')}
                  <p className="text-sm text-black">
                    Unidades: {cart[index].units}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-10 w-full mt-36 sm:mt-26">
            <button onClick={() => setLogInModal(true)}>Iniciar sesión</button>
            <button onClick={() => setRegisterModal(true)}>
              Registrarse
            </button>{" "}
            <button onClick={() => console.log(productsDatabase)}>
              clg cart
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
