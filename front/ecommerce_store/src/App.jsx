import Button from "react-bootstrap/Button";
import { BrowserRouter, Outlet } from "react-router-dom";
import './assets/css/fontawesome.css'

import "./App.css";
import HeaderDesktop from "./assets/components/common/headerDesktop";

function App() {
  return <>
      <HeaderDesktop/>
      <main>
        <Outlet/>
      </main>
  </>;
}

export default App;
