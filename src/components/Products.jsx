import { useEffect, useState } from 'react'
import {GetProducts} from "../Api"
import {cleanImageUrl} from "../utilities/formaters"
import './Products.css'

function Products(){

const [Products, setProducts] = useState([])

useEffect(() => {
  GetProducts("https://api.escuelajs.co/api/v1/products")
    .then((data) => setProducts(data))
    .catch((error) => console.error(error));
}, []);

function redireccionarURL(url) {
  window.location.href = url; // Reemplaza esta URL con la que desees redirigir
}
  

  return (
  <>
   <div className="products-container"> {/* Contenedor de los productos */}
      {Products.map((product, index) => (
        <div key={index} className="product-item" onClick={() => redireccionarURL(product.images[0])}> {/* Estilo para cada producto */}
          <img className="product-img" src={cleanImageUrl(product.images[0])} alt={product.title} />
          <p className='product-price'>${product.price}</p>
          <h3 className='product-title'>{product.title}</h3>
          
        </div>
      ))}
    </div>
  </>
  )
}

export default Products