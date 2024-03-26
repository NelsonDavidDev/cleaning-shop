import { uploadFile, writeProductData } from "./../firebase/config";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function AdminPanel() {
  const [archivos, setArchivos] = useState([]);
  const [urls, setUrls] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    images: [],
  });

  function uploadProduct() {
    writeProductData(product, product.id);
  }

  useEffect(() => {
    setProduct({
      ...product,
      images: urls,
      id: v4(),
    });
  }, [urls]);

  const handlePrductChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleFilesUpload = async () => {
    setUrls([]);
    try {
      // Subir cada archivo a Firebase y obtener una promesa con la URL
      const promesas = archivos.map(async (archivo) => {
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
    setProduct({ ...product, images: urls });
  };

  const handleFileInputChange = (event) => {
    const nuevosArchivos = Array.from(event.target.files);
    setArchivos(nuevosArchivos);
    uploadFile(archivos);
  };

  return (
    <div className="grid grid-cols-2 w-screan w-3/4 gap-5 mx-auto my-auto ">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="file"
          multiple
          onChange={(e) => {
            handleFileInputChange(e);
          }}
        />
        <button
          className="bg-green-500 rounded-xl w-1/2"
          type="button"
          onClick={() => handleFilesUpload()}
        >
          Subir imagenes
        </button>

        

        <label className="text-xl text-white mr-1">Nombre del Producto:</label>
        <input
        className="max-h-10"
          type="text"
          value={product.title}
          name="title"
          id=""
          onChange={(e) => handlePrductChange(e)}
        />

        <label className="text-xl text-white mr-1">Precio</label>
        <input
         className="max-h-10"
          type="number"
          value={product.price}
          name="price"
          id=""
          onChange={(e) => handlePrductChange(e)}
        />

        <label className="text-xl text-white mr-1 ">Descripción</label>
        <input
          className="h-32"
          type="text"
          value={product.description}
          name="description"
          id=""
          onChange={(e) => handlePrductChange(e)}
        />
        <label className="text-xl text-white mr-1 ">Categoria</label>
        <input
          type="text"
          value={product.category}
          name="category"
          id=""
          onChange={(e) => handlePrductChange(e)}
        />

<button
        className="bg-green-500 rounded-xl w-36 h-10"
        onClick={uploadProduct}
      >
        Registrar Producto
      </button>
      </div>

      <div>
      <div className="grid grid-cols-2 gap-1 bg-">
          {urls.map((url, index) => (
            <img className="w-2/4" key={index} src={url} />
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default AdminPanel;
