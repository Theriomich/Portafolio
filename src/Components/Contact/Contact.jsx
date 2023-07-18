import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Contact.css";
import HomeImg from "./Images/homesn.png";
import { Link } from "react-router-dom";

function Contact() {
  const MySwal = withReactContent(Swal);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Contact_Mich",
        "template_ugsje2l",
        form.current,
        "CGJJmH1sYuCRwf5T9"
      )
      .then(
        (result) => {
          MySwal.fire({
            title: <strong>¡Mensaje enviado!</strong>,
            html: <i>¡Te responderé a la brevedad!</i>,
            icon: "success",
          });
        },
        (error) => {
          MySwal.fire({
            title: <strong>¡Ups, ocurió un error!</strong>,
            html: <i>El mensaje no se envió :(, intenta de nuevo</i>,
            icon: "error",
          });
        }
      );
  };
  return (
    <>
      <div className="backHome">
        <Link to="/">
          <img src={HomeImg}></img>
        </Link>
      </div>
      <h1 className="TitleContact">Contacto</h1>
      <form ref={form} onSubmit={sendEmail} className="field">
        <label>Nombre</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Mensaje</label>
        <textarea name="message" style={{ width: "250px" }} required />
        <input className="submitButton" type="submit" value="Enviar" />
      </form>
      <div className="footerContact">
        <h3 className="subtitleContact">Contactame directamente por:</h3>
        <p className="paragraph">Correo: M.cifuentes.mankoch@gmail.com</p>
        <p className="paragraph">Número de teléfono: 984943280</p>
      </div>
    </>
  );
}

export default Contact;
