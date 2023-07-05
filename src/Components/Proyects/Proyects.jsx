import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Proyects.css";
import { Link } from "react-router-dom";
import CardValidation from "./Gifs/Cardv.gif";
import HarryPotter from "./Gifs/HarryPotter.gif";

function Proyects() {
  return (
    <>
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
              <Button variant="primary">Ver Proyecto</Button>
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
              personajes, posiones, hechizos y curiosidades. Con ambiente y
              música had hok.
            </Card.Text>
            <Link to="https://theriomich.github.io/SCL021-data-lovers/">
              <Button variant="primary">Ver Protecto</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Proyects;
