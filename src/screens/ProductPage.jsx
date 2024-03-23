import { useEffect, useState } from "react";
import Product from "../components/Product"
import Products from "../components/Products";

function ProductPage({id}) {

  const [product, setProduct] = useState([]);


  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products/' + id);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);
  

  return (
    <>
      {/* Verificar si product.images está definido antes de intentar renderizar */}
      {product && product.images && (
            <Product product={product}/>
      )}
        <Products/>
    </>
  );
}

export default ProductPage;