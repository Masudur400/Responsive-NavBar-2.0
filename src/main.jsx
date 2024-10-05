import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import NavbarOne from './components/NavbarOne/NavbarOne.jsx';
import NavbarTwo from './components/NavbarTwo/NavbarTwo.jsx'; 
import NavbarCustomize from './components/NavbarCustomize/NavbarCustomize.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/navbarOne',
        element:<NavbarOne></NavbarOne>
      },
      {
        path:'/navbarTwo',
        element:<NavbarTwo></NavbarTwo>
      }, 
      {
        path:'/navbarcustomize',
        element:  <NavbarCustomize></NavbarCustomize>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
