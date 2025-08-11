import Button from "react-bootstrap/Button";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./assets/css/fontawesome.css";

import "./App.css";
import HeaderDesktop from "./assets/components/common/HeaderDesktop.jsx";
import HeaderMobile from "./assets/components/common/HeaderMobile.jsx";
import Header from "./assets/components/common/Header.jsx";
import Footer from "./assets/components/home/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
