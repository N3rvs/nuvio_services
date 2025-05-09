import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import logo from "../assets/nuvio.png";
import ProductCard from "../Components/ProductCards";
import GlassButton from "../Components/GlassButton";
import IconButton from "../Components/IconButton";
import ModalInfo from "../Components/ModalInfo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home: FC = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="bg-nuvio-bg text-nuvio-text font-sans min-h-screen w-full">
      {/* Header */}
      <header className="shadow-sm bg-nuvio-light sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-40 py-4 flex justify-between items-center">

          <Link
            to="/"
            className="flex items-center gap-2 max-h-12 overflow-hidden"
          >
            <img
              src={logo}
              alt="Nuvio logo"
              className="max-h-40 w-auto object-contain"
            />

          </Link>
          <nav className="space-x-6 text-sm">
            <Link to="/" className="hover:text-nuvio-hover">
              Inicio
            </Link>
            <Link to="/productos" className="hover:text-nuvio-hover">
              Productos
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 w-full">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Conecta con la esencia local
          </h2>
          <p className="text-lg text-nuvio-text/80 mb-6">
            En Nuvio, llevamos los productos de artesanos y pequeños productores
            directamente a tus manos — sin intermediarios, sin inventario.
          </p>
          <div className="flex justify-center items-center gap-4">
            <GlassButton variant="nuvio">
              <Link to="/productos" className="block w-full text-center">
                Ver productos
              </Link>
            </GlassButton>
            <IconButton
              icon={<Info size={18} />}
              ariaLabel="Más información sobre Nuvio"
              onClick={() => setInfoOpen(true)}
              size="md"
            />
          </div>
        </motion.div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 px-6 w-full bg-nuvio-light">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-nuvio-primary">
            Productos destacados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ProductCard
                  title={`Producto #${i}`}
                  description="Descripción breve del producto artesanal."
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nuvio-card py-6 text-center text-sm text-nuvio-text w-full">
        © {new Date().getFullYear()} Nuvio — Conectando lo local con lo digital.
      </footer>

      <ModalInfo isOpen={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
};

export default Home;
