import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/layout';
import Home from '../Pages/Home';
import Productos from '../Pages/Productos';
import ProductoDetalle from '../Components/ProductoDetalle';
import LoginPage from '../Pages/LoginPage';
import AdminPanel from '../Pages/AdminPanel'; // puedes renombrar según uses
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'productos', element: <Productos /> },
      { path: 'producto/:id', element: <ProductoDetalle /> },
      { path: 'admin', element: <PrivateRoute><AdminPanel /></PrivateRoute> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
