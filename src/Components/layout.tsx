
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Layout = () => {
  return (
    <div className="bg-nuvio-bg text-nuvio-text font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-nuvio-card py-6 text-center text-sm text-nuvio-text w-full">
        © {new Date().getFullYear()} Nuvio — Conectando lo local con lo digital.
      </footer>
    </div>
  );
};

export default Layout;
