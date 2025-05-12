// src/Pages/AdminPanel.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-nuvio-primary mb-6">Panel de Administración</h1>
      
      <div className="space-y-4">
        <p className="text-lg text-nuvio-text">
          Bienvenido, admin 👋 Aquí podrás gestionar productos, pedidos y productores.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
        >
          Cerrar sesión
        </button>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Secciones (próximamente):</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>📦 Gestión de productos</li>
            <li>🛒 Ver y procesar pedidos</li>
            <li>🤝 Productores vinculados</li>
            <li>📈 Estadísticas de ventas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
