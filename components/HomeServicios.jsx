import styles from "../styles/HomeServicios.module.css";

const HomeServicios = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Nuestros servicios</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <img src="/images/serv1.png" alt="" />
            <p>Economía y finanzas</p>
          </li>
          <li className={styles.item}>
            <img src="/images/serv2.png" alt="" />
            <p>Impuestos</p>
          </li>
          <li className={styles.item}>
            <img src="/images/serv3.png" alt="" />
            <p>Prevención de lavado de dinero</p>
          </li>
          <li className={styles.item}>
            <img src="/images/serv4.png" alt="" />
            <p>Procesos</p>
          </li>
          <li className={styles.item}>
            <img src="/images/serv5.png" alt="" />
            <p>Soluciones informáticas</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeServicios;
