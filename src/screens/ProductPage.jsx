import { useEffect, useState } from "react";
import Product from "../components/Product"
import Products from "../components/Products";
import { get, ref } from "firebase/database";
import { database } from "./../firebase/config";

function ProductPage({id}) {

  const [product, setProduct] = useState([]);




  useEffect(() => {
    const obtenerDatoDeFirebase = async () => {
      try {
        const snapshot = await get(ref(database, 'products/' + id)); // Ruta de tu dato en la base de datos
        if (snapshot.exists()) {
          const datoFirebase = snapshot.val();
          setProduct(datoFirebase);
        } else {
          alert('No se encontró el dato');
        }
      } catch (error) {
        alert('Error al obtener el dato :' + error);
      }
    };
    obtenerDatoDeFirebase();
  }, [id]);
  
  

  return (
    <>
      {/* Verificar si product.images está definido antes de intentar renderizar */}
      {product && product.images && (
            <Product product={product}/>
      )}
      <h2 className="text-2xl mb-5 mt-10 ml-36 text-white font-bold">Productos similares</h2>
        <Products/>
    </>
  );
}

export default ProductPage;