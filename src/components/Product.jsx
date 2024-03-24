import { cleanImageUrl } from "../utilities/formaters";
import { useState, useEffect } from "react";

function Product({ product }) {
  const [currentImage, setCurrentImage] = useState(product.images);
  const [counter, setCounter] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(product);

  //increase counter
  const increase = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setCurrentImage(cleanImageUrl(product.images[0]));
    setCurrentProduct(product);
  }, [product]);

  return (
    <div className="grid grid-cols-2 dark:bg-gray-800 p-5 rounded-xl m-64 mt-5 mb-5 h-min">
      <div className="">
        <img className="w-auto rounded-xl mt-5" src={currentImage} />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold capitalize mt-10 text-white">{product.title}</h2>
        <h2 className="text-xl capitalize mt-10 text-white m-10">{product.description}</h2>


        <h2 className="text-xl text-white font-bold mt-48">{product.price * counter}$</h2>
        <div className="counter">
          <span className="counter__output text-white font-bold text-2xl">{counter}</span>
          <div className="btn__container">
            <button
              className="bg-zinc-600 m-1 w-6 rounded-md"
              onClick={decrease}
            >
              -
            </button>
            <button
              className="bg-blue-700 m-1 w-6 rounded-md"
              onClick={increase}
            >
              +
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-1">
        <button className="bg-red-600 rounded-md hover:bg-red-400 p-1 m-auto w-32">
          Add to Cart
        </button>
        <button className="bg-green-600 rounded-md hover:bg-green-400 p-1 m-auto w-32">
          WhatsApp
        </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mt-1 col-span-1 dark:bg-gray-700 rounded-xl">
        {currentProduct.images.map((image, index) => (
          <img
            className={image === currentImage ? " w-24 rounded-lg border-solid border-4 border-sky-500" : " w-24 rounded-lg opacity-50 border-solid border-2 border-white"}
            key={index}
            src={cleanImageUrl(image)}
            alt={`Producto ${index + 1}`}
            onClick={() => setCurrentImage(cleanImageUrl(image))}
            onMouseOver={() => setCurrentImage(cleanImageUrl(image))}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;