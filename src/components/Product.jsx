import { cleanImageUrl } from "../utilities/formaters";
import { useState, useEffect } from "react";

function Product({ product, user }) {
  const [currentImage, setCurrentImage] = useState(product.images);
  const [units, setunits] = useState(1);
  const [objToCart, setObjToCart] = useState()
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

  function addToCart() {
    if (cart.products.hasOwnProperty(product.id)) {
      setCart(prevState => ({
        ...prevState,
        products: {
          ...prevState.products,
          [product.id]: {
            ...prevState.products[product.id],
            units: prevState.products[product.id].units + 1
          }
        }
      }));
    } else {
      setCart(prevState => ({
        ...prevState,
        products: {
          ...prevState.products,
          [product.id]: objToCart
        }
      }));
    }
    
    // Guardar el objeto cart actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  //increase counter
  const increase = () => {
    if (units < 5) {
      setunits(units + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (units > 1) {
      setunits(units - 1);
    }
  };

  useEffect(() => {
    setObjToCart({
      title : product.title,
      price : product.price,
      images : product.images[0],
      units : units
    })
    setCurrentImage(cleanImageUrl(product.images[0]));
  }, [product]);

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
        <h2 className="text-3xl font-bold capitalize jus">
          {product.title}
        </h2>
        <h2 className="text-2xl mt-10 ">
          {product.description}
        </h2>

        <div className="h-full p-10 bg-white flex items-end justify-center">
          <div className="">
          <h2 className="text-5xl">$ {product.price * units}</h2><br/>
          <div className="counter">
            
            <div className="btn__container text-2xl flex justify-center items-center">
              <div className="border border-black rounded-xl h-12 flex items-center justify-center mr-2">
              <button
                className="w-10 rounded-md h-full"
                onClick={decrease}
              >
                -
              </button>
              <span className="counter__output mx-0 font-bold ">
              {units}
            </span>
              <button
                className="w-10 rounded-md h-full"
                onClick={increase}
              >
                +
              </button>
              </div>
              
              <button onClick={user ? ("") : (() => addToCart())
                
              } className="rounded-md p-2 m-auto bg-sky-500">
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