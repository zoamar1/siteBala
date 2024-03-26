import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from './App.jsx'
import { Media } from './Media';


import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>
  },
  {
    path: "/media",
    element:  <Media/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
