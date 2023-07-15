import BannerFrontEnd from "../../img/BannerFrontEnd.png";
import Subtitle from "./SubTitle";
import { Link } from "react-router-dom";
import "./Header.css";
import cursorImage from "./assets/cursor.png";

function Header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BannerFrontEnd} className="imgBanner" alt="banner" />
        <div>
          <h2 className="title">{props.title}</h2>
        </div>
        <Subtitle />
      </header>
      <div className="containerLinks">
        <div className="btn btn-one link">
          <Link className="link" to="/About/">
            <span aria-label="Acerca de Mi">Acerca de Mi</span>
          </Link>
        </div>
        <div className="btn btn-two">
          <Link className="link" to="/Proyects/">
            <span>Proyectos</span>
          </Link>
        </div>
        <div className="btn btn-three">
          <Link className="link" to="/Contact/">
            <span aria-label="Contacto">Contacto</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
