import { useEffect, useState } from 'react'
import { get, ref, child,getDatabase } from "firebase/database";
import {cleanImageUrl} from "../utilities/formaters"
import {Link} from "wouter"

function Products(){

const [products, setProducts] = useState([])

useEffect(() => {
  const dbRef = ref(getDatabase())
    get(child(dbRef, 'products/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let results = Object.values(snapshot.val())
        setProducts(results)
      }else{
        alert("sin productos")
      }
    })
}, []);
  

  return (
   <div className="grid grid-cols-5 gap-1 m-64 mt-0"> {/* Contenedor de los productos */}
      {products.map((product, index) => (
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