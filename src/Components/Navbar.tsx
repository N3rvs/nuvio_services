// src/Components/Navbar.tsx
import { Link } from 'react-router-dom';
import logo from '../assets/nuvio.png';

const Navbar = () => {
  return (
    <header className="shadow-sm bg-nuvio-light sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 max-h-12 overflow-hidden">
          <img src={logo} alt="Nuvio logo" className="max-h-40 w-auto object-contain" />
        </Link>
        <nav className="space-x-6 text-sm">
          <Link to="/" className="hover:text-nuvio-hover">Inicio</Link>
          <Link to="/productos" className="hover:text-nuvio-hover">Productos</Link>
          <Link to="/admin" className="hover:text-nuvio-hover">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
