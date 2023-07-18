import React from "react";
import "./Footer.css";

function Footer(prop) {
  const children = prop.children;
  return (
    <>
      {children}
      <div className="Footer">
        <footer>
          <p> 2023 Michelle Cifuentes. Todos los derechos reservados.</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/michelle-cifuentes-webdeveloper/"
              target="_blank"
            >
              <i className="fab fa-linkedin logos"></i>
            </a>
            <a href="https://github.com/Theriomich/" target="_blank">
              <i className="fab fa-github logos"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
