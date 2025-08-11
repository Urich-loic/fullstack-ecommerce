import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/custom.css";
import "./assets/css/animate.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./assets/pages/Home.jsx";
import About from "./assets/pages/About.jsx";
import UserLogin from "./assets/pages/UserLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <UserLogin />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
