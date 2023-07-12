import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h1 className="TitleContact">Contacto</h1>
      <form ref={form} onSubmit={sendEmail} className="field">
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" style={{ width: "250px" }} />
        <input type="submit" value="Enviar" />
      </form>
      <h3 className="subtitleContact">Contactame directamente por:</h3>
      <p className="paragraph">Correo: M.cifuentes.mankoch@gmail.com</p>
      <p className="paragraph">Número de teléfono: 984943280</p>
    </>
  );
}

export default Contact;
