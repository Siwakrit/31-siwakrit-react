import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Homeadmin from './pages/Homeadmin.jsx';
import Homeuser from './pages/Homeuser.jsx';
import Owner from './pages/Owner.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:< App/>,
  },
  {
    path: "/homeuser",
    element: <Homeuser />,
  },
  {
    path: "/homeadmin",
    element: <Homeadmin />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
