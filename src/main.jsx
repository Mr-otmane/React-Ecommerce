import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/",
        element: <Home/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
