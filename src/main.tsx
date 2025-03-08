import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import Register from './Register.tsx';
import Sponsorship from './pages/Sponsorship.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },
  {
    path: "/en/*",
    element: <App />,
  },
  {
    path: "/es/*",
    element: <App />,
  },
  {
    path: "/en/register",
    element: <Register />,
  },
  {
    path: "/es/register",
    element: <Register />,
  },
  {
    path: "/en/sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "/es/sponsorship",
    element: <Sponsorship />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);