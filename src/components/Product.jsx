import { cleanImageUrl } from "../utilities/formaters";
import { useState, useEffect } from "react";

function Product({ product, user }) {
  const [currentImage, setCurrentImage] = useState(product.images);
  const [units, setUnits] = useState(1);
  const [objToCart, setObjToCart] = useState({});
  const [cart, setCart] = useState({ products: [] });

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', cartData);
  };

  const addToCart = () => {
    const existingProductIndex = cart.products.findIndex(
      (item) => item.id === objToCart.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = cart.products.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            units: item.units + objToCart.units,
          };
        }
        return item;
      });

      setCart((prevState) => ({
        ...prevState,
        products: updatedProducts,
      }));
    } else {
      setCart((prevState) => ({
        ...prevState,
        products: [...prevState.products, objToCart],
      }));
    }
  };

  useEffect(() => {
    if (cart.products.length > 0) {
      saveCartToLocalStorage(JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    setObjToCart((prevState) => ({
      ...prevState,
      id: product.id,
      units: units,
    }));
  }, [units]);

  useEffect(() => {
    setObjToCart((prevState) => ({
      ...prevState,
      id: product.id,
      units: units,
    }));
    setCurrentImage(cleanImageUrl(product.images[0]));
    setUnits(1)
  }, [product]);

  //increase counter
  const increase = () => {
    if (units < 5) {
      setUnits(units + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (units > 1) {
      setUnits(units - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white p-5 rounded-xl mx-20 my-5 text-black">
      <div className="">
        <div className="flex items-center justify-center">
          <img className="w-96 rounded-xl " src={currentImage} />
        </div>

        <div className="flex gap-2 mt-1 rounded-xl">
          {product.images.map((image, index) => (
            <img
              className={
                image === currentImage
                  ? " w-24 rounded-lg border-solid border-4 border-sky-500"
                  : " w-24 rounded-lg opacity-50 border-solid border-2"
              }
              key={index}
              src={cleanImageUrl(image)}
              alt={`Producto ${index + 1}`}
              onClick={() => setCurrentImage(cleanImageUrl(image))}
              onMouseOver={() => setCurrentImage(cleanImageUrl(image))}
            />
          ))}
        </div>
      </div>
      <div className="text-center flex-col flex justify-center mt-10">
        <h2 className="text-3xl font-bold capitalize jus">{product.title}</h2>
        <h2 className="text-2xl mt-10 ">{product.description}</h2>

        <div className="h-full p-10 bg-white flex items-end justify-center">
          <div className="">
            <h2 className="text-5xl">$ {(product.price * units).toLocaleString('es-CO')}</h2>
            <br />
            <div className="counter">
              <div className="btn__container text-2xl flex justify-center items-center">
                <div className="border border-black rounded-xl h-12 flex items-center justify-center mr-2">
                  <button className="w-10 rounded-md h-full" onClick={decrease}>
                    -
                  </button>
                  <span className="counter__output mx-0 font-bold ">
                    {units}
                  </span>
                  <button className="w-10 rounded-md h-full" onClick={increase}>
                    +
                  </button>
                </div>

                <button
                  onClick={user ? "" : () => addToCart()}
                  className="rounded-md p-2 m-auto bg-sky-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
