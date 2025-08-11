import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/custom.css";
import "./assets/css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./assets/pages/Home.jsx";
import About from "./assets/pages/About.jsx";
import UserLogin from "./assets/pages/UserLogin.jsx";
import Contact from "./assets/pages/Contact.jsx";
import Refund from "./assets/pages/Refund.jsx";
import Shipping from "./assets/pages/Shipping.jsx";
import Terms from "./assets/pages/terms.jsx";
import Purchase from "./assets/pages/Purchase.jsx";
import Product from "./assets/pages/product.jsx";
import NotificationPage from "./assets/pages/NotificationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/refund-policy",
        element: <Refund />,
      },
      {
        path: "/shipping-policy",
        element: <Shipping />,
      },
      {
        path: "/terms-of-use",
        element: <Terms />,
      },
      {
        path: "/purchase-policy",
        element: <Purchase />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
