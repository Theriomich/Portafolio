import BannerFrontEnd from "../../img/BannerFrontEnd.png";
import Subtitle from "./SubTitle";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BannerFrontEnd} alt="banner" />
        <h2>{props.title}</h2>
        <Subtitle />
      </header>
      <div className="containerLinks">
        <Link className="link" to="/About/">
          <button>Acerca de Mi</button>
        </Link>
        <Link className="link" to="/Proyects/">
          <button>Proyectos</button>
        </Link>
        <Link className="link" to="/Contact/">
          <button>Contacto</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
