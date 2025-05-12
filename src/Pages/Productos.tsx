
import React from 'react';
import ProductCard from '../Components/ProductCards';
import { productosMock } from '../data/productosMock';
import { Link } from 'react-router-dom';


const Productos: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-nuvio-primary">Nuestros Productos</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {productosMock.map((producto) => (
          <Link key={producto.id} to={`/producto/${producto.id}`}>
            <ProductCard
              title={producto.nombre}
              description={producto.descripcion}
              // imageUrl={producto.imagen}
              precio={producto.precio}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productos;
