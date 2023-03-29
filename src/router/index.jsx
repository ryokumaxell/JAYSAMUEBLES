import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Lineas from "../pages/Lineas";
import Categorias from "../pages/Categorias";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";
import Layouts from "../pages/Layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/lineas",
        element: <Lineas />,
      },
      {
        path: "/categorias",
        element: <Categorias />,
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
    ],
  },
]);
