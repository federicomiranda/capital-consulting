import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.section} id="contacto">
      <div className="container">
        <h2 className={styles.title}>Contacto</h2>

        <div className={styles.content}>
          <form action="#" className={styles.form}>
            <div>
              <label className={styles.label} htmlFor="nombre">
                Nombre
              </label>
              <input
                className={styles.input}
                type="text"
                id="nombre"
                name="nombre"
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="apellido">
                Apellido
              </label>
              <input
                className={styles.input}
                type="text"
                id="apellido"
                name="apellido"
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="tel">
                Teléfono
              </label>
              <input className={styles.input} type="tel" id="tel" name="tel" />
            </div>
            <div>
              <label className={styles.label} htmlFor="email">
                E-mail
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className={styles.textareacontainer}>
              <label className={styles.label} htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                className={styles.textarea}
                name="mensaje"
                id="mensaje"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className={styles.btn}>Enviar</button>
          </form>

          <ul className={styles.data}>
            <li>
              <img src="/images/direccion.png" alt="" />
              <p>Maipú 255, Piso 14, CABA, Argentina.</p>
            </li>
            <li>
              <img src="/images/telefono.png" alt="" />
              <p>+54 11 4328 3995</p>
            </li>
            <li>
              <img src="/images/email.png" alt="" />
              <p>contacto@capitalconsulting.com.ar</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
