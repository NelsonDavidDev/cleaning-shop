import {uploadFile, writeProductData } from "./../firebase/config";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function AdminPanel() {



  const [archivos, setArchivos] = useState([]);
  const [urls, setUrls] = useState([]);
  const [product, setProduct] = useState({
    id:"",
    title:"",
    price:"",
    description:"",
    category:"",
    images:[]
  })

  function uploadProduct() {
    writeProductData(product, product.id)
  }

  useEffect(() => {
    
    setProduct(({
      ...product,
      images: urls,
      id: v4()
    }))
  }, [urls]);

  const handlePrductChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleFilesUpload = async () => {
    setUrls([])
    try {
      // Subir cada archivo a Firebase y obtener una promesa con la URL
      const promesas = archivos.map(async archivo => {
        const url = await uploadFile(archivo, "/Products"); // Subir archivo a Firebase y obtener URL
        return url;
      });

      // Esperar a que todas las promesas se resuelvan y obtener las URLs
      const urlsSubidas = await Promise.all(promesas);
      
      // Actualizar el estado con las URLs subidas
      setUrls(urlsSubidas);
    } catch (error) {
      alert("Error al subir los archivos");
    }
    setProduct({...product, images:urls})
  };

  const handleFileInputChange = (event) => {
    const nuevosArchivos = Array.from(event.target.files);
    setArchivos(nuevosArchivos);
    uploadFile(archivos)
  };

  

  return (
    <div>
      <input type="file" multiple onChange={(e)=> {handleFileInputChange(e)}} />
      <button type="button" onClick={()=>handleFilesUpload()}>Subir imagenes</button>
      <div className="display-flex flex">
        {urls.map((url, index) => (
           <img className="h-32" key={index} src={url}/>
        ))}
      </div>
      <label>Nombre del Producto</label>
      <input type="text" value={product.title} name="title" id="" onChange={(e) => handlePrductChange(e)}/>
      <label>Precio</label>
      <input type="number" value={product.price} name="price" id="" onChange={(e) => handlePrductChange(e)}/>
      <label>Descripción</label>
      <textarea value={product.description} name="description" id="" onChange={(e) => handlePrductChange(e)}/>
      <label>Categoria</label>
      <input type="text" value={product.category} name="category" id="" onChange={(e) => handlePrductChange(e)}/>
      <button onClick={uploadProduct} type="button">Registrar Producto</button>
    </div>
  );
}

export default AdminPanel