import "./Aboutme.css";
import WOW from "wowjs";
import "animate.css";
import { useEffect } from "react";
import guitar from "./Images/guitar.jpeg";
import record from "./Images/recording.jpeg";
import laboratoria from "./Images/laboratoria.JPG";
import pcwork from "./Images/pcclouse.jpeg";
import clouseup from "./Images/closeup.jpeg";
import HomeImg from "./Images/homesn.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function AboutMe() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div className="backHome">
        <Link to="/">
          <img src={HomeImg}></img>
        </Link>
      </div>
      <h1 className="About">Acerca de mi</h1>
      <section className="section">
        <p id="pAbout" className="section--yellow wow fadeInDown">
          Mi nombre es Michelle y vivo en viña del Mar. Estudié interpretación
          musical en guitarra eléctrica, en la Escuela Moderna de Música durante
          6 años. Mi paso de la música a la tecnología fue cuando comencé a
          involucrarme más en la tecnología aplicada a la música, y descubrí
          cómo las herramientas digitales y los avances tecnológicos estaban
          revolucionando la forma en que se crea, se produce y se distribuye la
          música. Me gustó la forma en que la tecnología permitía explorar
          nuevas sonoridades, experimentar con diferentes géneros y estilos
          musicales, y llevar la música a un público más amplio a través de
          plataformas digitales.
        </p>
        <img
          src={guitar}
          id="img-guitar"
          className="wow slideInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        />
      </section>

      <section className="section">
        <p id="pAbout" className="section--yellow wow fadeInDown">
          Este encuentro entre la música y la tecnología despertó en mí un
          interés más profundo por la tecnología en sí misma. Comencé a explorar
          más allá del ámbito musical y descubrí que la tecnología tenía un
          impacto significativo en todos los aspectos de la vida, incluyendo la
          forma en que trabajamos, nos comunicamos y resolvemos problemas.
        </p>
        <img
          src={record}
          id="img-guitar"
          className="section--yellow wow fadeInRight"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            WebkitAnimationDelay: "2s",
            MozAnimationDelay: "2s",
            animationDelay: "2s",
          }}
        />
      </section>
      <section className="section">
        <p id="pAbout" className="section--yellow wow fadeInDown">
          Me formé en Laboratoria ya que fui seleccionada entre miles de
          solicitantes para unirme a su programa, superando pruebas técnicas y
          evaluaciones exhaustivas que pusieron a prueba mi capacidad de
          aprendizaje, resolución de problemas y perseverancia en el mundo del
          desarrollo web. Adquirí experiencia sólida en lenguajes de
          programación como HTML, CSS y JavaScript, así como en el uso de
          herramientas y tecnologías como React y Firebase. Además Laboratoria
          nos sumergió en un entorno de trabajo que reflejaba fielmente el mundo
          laboral del desarrollo web. Utilizamos sprints y adoptamos la
          metodología Scrum para planificar y realizar entregas iterativas, lo
          cual nos permitió desarrollar habilidades en gestión de proyectos y
          colaboración efectiva en equipos.
        </p>
        <img
          src={laboratoria}
          id="img-guitar"
          className="wow slideInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        />
      </section>
      <section className="section">
        <p id="pAbout" className="section--yellow wow fadeInDown">
          Adquirí experiencia sólida en lenguajes de programación como HTML, CSS
          y JavaScript, así como en el uso de herramientas y tecnologías como
          React y Firebase. Además Laboratoria nos sumergió en un entorno de
          trabajo que reflejaba fielmente el mundo laboral del desarrollo web.
          Utilizamos sprints y adoptamos la metodología Scrum para planificar y
          realizar entregas iterativas, lo cual nos permitió desarrollar
          habilidades en gestión de proyectos y colaboración efectiva en
          equipos.
        </p>
        <img
          src={pcwork}
          id="img-pc"
          className="section--yellow wow fadeInRight"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            WebkitAnimationDelay: "2s",
            MozAnimationDelay: "2s",
            animationDelay: "2s",
          }}
        />
      </section>
      <section className="section">
        <p id="pAbout" className="section--yellow wow fadeInDown">
          He descubierto que mi verdadera pasión radica en el desarrollo web. La
          resolución de problemas, la creatividad y la oportunidad de construir
          soluciones tecnológicas me motivan profundamente. Además, mi
          experiencia en el área musical me ha brindado habilidades valiosas
          como la el trabajo en equipo, la organización y la atención al
          detalle, que me han resultado muy beneficiosas en mi transición al
          mundo del desarrollo.
        </p>
        <img
          src={clouseup}
          id="img-me"
          className="wow slideInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        />
      </section>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
