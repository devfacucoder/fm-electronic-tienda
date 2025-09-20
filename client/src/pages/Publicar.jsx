import React, { useState } from "react";
import useApi from "../hooks/useApi";
function Publicar() {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [imagenes, setImagenes] = useState([]);
    const { createPost } = useApi();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("precio", precio);
    formData.append("stock", stock);
    formData.append("description", description);

    for (let i = 0; i < imagenes.length; i++) {
      formData.append("imagenes", imagenes[i]);
    }

    try {

      const res = await createPost(formData)
      if (!res.ok) throw new Error("Error al subir producto");
        
      const data = await res.json();
      console.log("Producto creado:", data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className=" min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Publicar Artículo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="p-2 rounded"
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="p-2 rounded"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="p-2 rounded"
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded"
        />
        <input
          type="file"
          multiple
          onChange={(e) => setImagenes(e.target.files)}
          className="p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}

export default Publicar;
