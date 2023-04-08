import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MAn from './components/pages/MAn';
import Home from './components/Home.jsx/Home';
import Cantain from './components/Cantain.jsx/Cantain';
import Contact from './components/Contact.jsx/Contact';
import About from './components/About.jsx/About';

let router = createBrowserRouter([
  {
    path: '/',
    element: <MAn></MAn>,



    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: "Cantain",
        element: <Cantain></Cantain>

      },

      {
        path: "Contact",
        element: <Contact></Contact>

      },
      {
        path: "Aboutus",
        element: <About></About>

      },
      // {
      //   path:"",
      //   element:<

      // },


    ]
  },

])








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
