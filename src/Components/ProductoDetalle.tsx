import React from 'react';
import { useParams } from 'react-router-dom';
import { productosMock } from '../data/productosMock';

const ProductoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const producto = productosMock.find(p => p.id === id);

  if (!producto) {
    return <div className="p-8 text-center text-red-500">Producto no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* <img src={producto.imagen} alt={producto.nombre} className="w-full h-80 object-cover rounded mb-6" /> */}
      <h1 className="text-3xl font-bold text-nuvio-primary mb-2">{producto.nombre}</h1>
      <p className="text-gray-700 text-lg mb-4">{producto.descripcion}</p>
      <p className="text-xl text-nuvio-primary font-semibold mb-6">{producto.precio.toFixed(2)} €</p>
      <button className="px-6 py-2 bg-nuvio-primary text-white rounded hover:opacity-90 transition">Comprar</button>
    </div>
  );
};

export default ProductoDetalle;
