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
import UserLogin from "./assets/pages/UserLogin.jsx";
import Contact from "./assets/pages/ContactPage.jsx";
import Refund from "./assets/pages/Refund.jsx";
import Shipping from "./assets/pages/Shipping.jsx";
import Terms from "./assets/pages/terms.jsx";
import Purchase from "./assets/pages/Purchase.jsx";
import Product from "./assets/pages/product.jsx";
import NotificationPage from "./assets/pages/NotificationPage.jsx";
import FavoritePage from "./assets/pages/FavoritePage.jsx";
import CartPage from "./assets/pages/CartPage.jsx";
import ContactPage from "./assets/pages/ContactPage.jsx";
import axios from 'axios'
import AboutPage from "./assets/pages/AboutPage.jsx";
import ProductByCategoryPage from "./assets/pages/ProductByCategoryPage.jsx";
import ProductBySubCategoryPage from "./assets/pages/ProductBySubCategoryPage.jsx";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

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
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
        path: "product/:id",
        element: <Product />,
      }
      ,
      {
        path: "/:category",
        element: <ProductByCategoryPage />,
      },
      {
        path: "/:category/:sub_cat",
        element: <ProductBySubCategoryPage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
       {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
