import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Oficina from "../pages/Oficina";
import Exterior from "../pages/Exterior";
import Financiamiento from "../pages/Financiamiento";
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
        path: "/oficina",
        element: <Oficina />,
      },
      {
        path: "/exterior",
        element: <Exterior />,
      },
      {
        path: "/financiamiento",
        element: <Financiamiento />,
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
