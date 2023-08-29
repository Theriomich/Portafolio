import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Proyects.css";
import { Link } from "react-router-dom";
import CardValidation from "./Gifs/Cardv.gif";
import HarryPotter from "./Gifs/HarryPotter.gif";
import Rionegro from "./Gifs/Rionegro.gif";
import RedSocial from "./Gifs/RedSocial.gif";
import MdLinks from "./Gifs/Mdlinks.gif";
import Burger from "./Gifs/Burguer Queen.gif";
import Eccomerse from "./Gifs/EccomerseMich.gif";
import RickMorty from "./Gifs/RICKMORTY.gif";
import HomeImg from "./Images/homesn.png";
import Footer from "../Footer/Footer";

function Proyects() {
  return (
    <>
      <div className="backHome">
        <Link to="/">
          <img src={HomeImg}></img>
        </Link>
      </div>
      <h1>Mis proyectos</h1>;
      <div className="divCards">
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={CardValidation} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Card Validation</Card.Title>
            <Card.Text>
              Primer proyecto que hicimos dentro del Bootcamp de Laboratoria.
              Una página de ventas de pasajes de avión que debe validar una
              tarjeta de credito para poder hacer efectiva la compra.
            </Card.Text>
            <Link to="https://theriomich.github.io/SCL021-card-validation/src/">
              <Button variant="primary" className="buttons">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={HarryPotter} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Data Lovers</Card.Title>
            <Card.Text>
              Segundo proyecto realizado en el Bootcamp de Laboratoria. Una
              página para fanáticos de Harry Potter que permite filtrar
              personajes, pociones, hechizos y curiosidades. Con ambiente y
              música had hok.
            </Card.Text>
            <Link to="https://theriomich.github.io/SCL021-data-lovers/">
              <Button variant="primary" className="buttons">
                Ver Protecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={RedSocial} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Red Social</Card.Title>
            <Card.Text>
              Tercer proyecto realizado dentro del Bootcamp. Una red social que
              permite a los usuarios crearse una cuenta, iniciar sesión,
              publicar y dar like a posts
            </Card.Text>
            <Link to="https://technology-red-social.web.app/">
              <Button className="buttons" variant="primary">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={MdLinks} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>MD Links</Card.Title>
            <Card.Text>
              Cuarto Proyecto realizado en solitario, con Node JS. Una librería
              para desarrolladores que permite leer links, mostrarlos y mostrar
              su estado, si estan o no funcionando. Descargable via Node
            </Card.Text>
            <Link to="https://www.npmjs.com/package/md-links-finder-theriomich">
              <Button className="buttons" variant="primary">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={Burger} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Burger Queen</Card.Title>
            <Card.Text>
              Quinto proyecto en solitario dentro del Bootcamp, usando la
              librería de React. En este proyecto hice una página para una
              hamburguesería, que permite agregar productos a un carro de
              compras
            </Card.Text>
            <Link to="https://krusty-burguer.netlify.app/">
              <Button className="buttons" variant="primary">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={Eccomerse} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              Eccomerse Tecnológico
            </Card.Title>
            <Card.Text>
              Proyecto realizado en solitario para practicar mis skills en
              React. Es un eccomerse ficticio que permite al usuario agregar
              productos al carro, eliminarlos y que se vayan sumando y
              agregando.
            </Card.Text>
            <Link to="https://shopping-cart-mich.netlify.app/">
              <Button className="buttons" variant="primary">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={Rionegro} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Río Negro TV</Card.Title>
            <Card.Text>
              Página web que realicé a una empresa productora de medios y
              radiodifusión para mostrar su trabajo
            </Card.Text>
            <Link to="https://www.rionegrotv.cl/">
              <Button className="buttons" variant="primary">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={RickMorty} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              Rick And Morty App
            </Card.Title>
            <Card.Text>
              Desafío técnico que realice extrayendo personajes de una API de
              Rick And Morty, usando React, rutas dinámicas, axios para la
              llamada a la API y Bootstrap
            </Card.Text>
            <Link to="https://rick-and-morty-mich.netlify.app/">
              <Button className="buttons" variant="primary">
                Ver Proyecto
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <footer className="Footer">
        <Footer />
      </footer>
    </>
  );
}

export default Proyects;
