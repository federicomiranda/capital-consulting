import styles from "../styles/HomeText.module.css";

const HomeText = () => {
  return (
    <section className={styles.section}>
      <p className={styles.text}>
        Capital Consulting es una firma independiente de consultoría de empresas
        y organismos. Su sede se encuentra en la Ciudad de Buenos Aires, y
        dentro de algunos de los servicios ofrecidos, brinda a sus clientes la
        posibilidad de reducir riesgos, resolver problemas y obtener resultados
        ante las oportunidades.
      </p>
      <p className={styles.text}>
        A partir de un enfoque global brinda soluciones concretas en un entorno
        dinámico y complejo.
      </p>
      <p className={styles.text}>
        Nuestro staff de asesores está compuesto por profesionales con remarcada
        experiencia en las distintas materias.
      </p>
    </section>
  );
};

export default HomeText;
