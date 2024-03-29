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
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 mx-20 mt-5 bg-white rounded-3xl"> {/* Contenedor de los productos */}
      {products.map((product, index) => (
        <Link href={ '/product/' + product.id } key={index} className="text-black hover:cursor-pointer p-3 flex justify-center items-center" > {/* Estilo para cada producto */}
          <div className='hover:text-cyan-500'>
          <img className="w-52" src={cleanImageUrl(product.images[0])} alt={product.title} />
          <h3 className='text-md capitalize '>{product.title}</h3>
          <p className='text-xl text-black'>$ {product.price}</p>
          </div>
          
        </Link>
      ))}
    </div>
  )
}

export default Products