import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import Register from './Register.tsx';
import Sponsorship from './pages/Sponsorship.tsx';
import Donations from './pages/Donations.tsx';
import PlayerRegistration from './pages/PlayerRegistration.tsx';
import SponsorshipRegistration from './pages/SponsorshipRegistration.tsx';
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
  {
    path: "/en/donations",
    element: <Donations />,
  },
  {
    path: "/es/donations",
    element: <Donations />,
  },
  {
    path: "/en/register/player",
    element: <PlayerRegistration />,
  },
  {
    path: "/es/register/player",
    element: <PlayerRegistration />,
  },
  {
    path: "/en/register/sponsorship",
    element: <SponsorshipRegistration />,
  },
  {
    path: "/es/register/sponsorship",
    element: <SponsorshipRegistration />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);