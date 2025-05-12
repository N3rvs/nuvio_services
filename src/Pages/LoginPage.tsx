// src/Pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err: any) {
      setError('Credenciales incorrectas o usuario no válido');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nuvio-bg text-nuvio-text">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-nuvio-primary">Login Admin</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none"
        />
        <button type="submit" className="w-full bg-nuvio-primary text-white py-2 rounded hover:opacity-90 transition">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
