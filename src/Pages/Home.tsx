import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassButton from '../Components/GlassButton';
import ModalInfo from '../Components/ModalInfo';
import ProductCard from '../Components/ProductCards';
import { productosMock } from '../data/productosMock';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home: FC = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="bg-nuvio-bg text-nuvio-text font-sans w-full">
      {/* Hero */}
      <section className="py-20 px-4 w-full bg-nuvio-light">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-nuvio-primary">
            Conecta con la esencia local
          </h2>
          <p className="text-lg text-nuvio-text/80 mb-6">
            En Nuvio, llevamos los productos de artesanos y pequeños productores
            directamente a tus manos.
          </p>
          <div className="flex justify-center items-center gap-4">
            <GlassButton variant="nuvio" onClick={() => setInfoOpen(true)}>
              ¿Cómo funciona Nuvio?
            </GlassButton>
          </div>
        </motion.div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 px-6 w-full bg-nuvio-bg">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-nuvio-primary">
            Productos destacados
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {productosMock.slice(0, 4).map((producto) => (
              <motion.div
                key={producto.id}
                className="w-full max-w-xs transition hover:shadow-lg rounded-xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={`/producto/${producto.id}`}>
                  <ProductCard
                    title={producto.nombre}
                    description={producto.descripcion}
                    // imageUrl={producto.imagen}
                    precio={producto.precio}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ModalInfo isOpen={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
};

export default Home;
