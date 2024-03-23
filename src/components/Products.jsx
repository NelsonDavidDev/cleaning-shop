import { useEffect, useState } from 'react'
import {GetProducts} from "../Api"
import {cleanImageUrl} from "../utilities/formaters"
import {Link} from "wouter"

function Products(){

const [Products, setProducts] = useState([])

useEffect(() => {
  GetProducts("https://api.escuelajs.co/api/v1/products")
    .then((data) => setProducts(data))
    .catch((error) => console.error(error));
}, []);
  

  return (
   <div className="grid grid-cols-5 gap-1 m-30"> {/* Contenedor de los productos */}
      {Products.map((product, index) => (
        <Link href={ '/product/' + product.id } key={index} className="text-white hover:bg-neutral-800 hover:cursor-pointer p-3" > {/* Estilo para cada producto */}
          <img className="w-100" src={cleanImageUrl(product.images[0])} alt={product.title} />
          <p className='text-sm'>${product.price}</p>
          <h3 className='text-sm font-bold capitalize'>{product.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default Products