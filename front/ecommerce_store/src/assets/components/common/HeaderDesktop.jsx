import gsap from "gsap";
import { useEffect } from "react";
import { useLocation, Link, Links } from "react-router-dom";


export default function HeaderDesktop() {

  let location = useLocation();

    useEffect(() => {
        gsap.fromTo(".content", { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
    }, [location]);


  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
    </div>
  )
}
