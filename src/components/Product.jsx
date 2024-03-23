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
    <div className="w-full grid grid-cols-3 bg-white p-10 rounded-xl">
      <div className="grid grid-rows-3 gap-1 w-28 ">
        {currentProduct.images.map((image, index) => (
          <img
            className={image === currentImage ? "w-32 rounded-lg border-solid border-2 border-sky-500" : "w-32 rounded-lg opacity-50 hover:border-solid hover:border-2 hover:border-sky-500"}
            key={index}
            src={cleanImageUrl(image)}
            alt={`Producto ${index + 1}`}
            onClick={() => setCurrentImage(cleanImageUrl(image))}
            onMouseOver={() => setCurrentImage(cleanImageUrl(image))}
          />
        ))}
      </div>
      <div>
        <img className="w-auto rounded-xl" src={currentImage} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold capitalize">{product.title}</h1>
        <h2 className="text-xl mt-48">{product.price * counter}$</h2>
        <div className="counter">
          <span className="counter__output">{counter}</span>
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
        <button className="bg-red-600 rounded-md hover:bg-zinc-500 p-1 m-auto w-32">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;