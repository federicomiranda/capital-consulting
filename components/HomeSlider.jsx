import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import styles from "../styles/HomeSlider.module.css";

const HomeSlider = () => {
  return (
    <>
      <Carousel
        showArrows
        showStatus={false}
        showIndicators
        infiniteLoop
        showThumbs={false}
        swipeable
      >
        <div className={styles.slider}>
          <div className={styles.item}>
            <img src="images/slide1.png" />
            <article className={styles.article}>
              <h1 className={styles.title}>Economía y finanzas</h1>
              <p className={styles.text}>
                La Gerencia de Economía y Finanzas procesa y analiza la
                información de manera crítica para la elaboración de
                indicadores, publicaciones, investigaciones especiales y
                proyecciones a fin de que nuestros clientes puedan maximizar las
                oportunidades de negocios y disminuir la incertidumbre generada
                por el fluctuante entorno económico-financiero.
              </p>
              <Link href="/">
                <a className={styles.btn}>Leer más</a>
              </Link>
            </article>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.item}>
            <img src="images/slide2.png" />
            <article className={styles.article}>
              <h1 className={styles.title}>Impuestos</h1>
              <p className={styles.text}>
                Nuestros expertos cuentan con un conocimiento profundo de las
                leyes y reglamentaciones tributarias. Por ello podemos ofrecerle
                una amplia gama de servicios para que, además de cumplir
                adecuadamente con sus obligaciones fiscales, obtenga los máximos
                beneficios de las disposiciones vigentes.
              </p>
              <Link href="/">
                <a className={styles.btn}>Leer más</a>
              </Link>
            </article>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.item}>
            <img src="images/slide3.png" />
            <article className={styles.article}>
              <h1 className={styles.title}>
                PREVENCIÓN DE LAVADO DE DINERO Y FINANCIAMIENTO DEL TERRORISMO
              </h1>
              <p className={styles.text}>
                Los Sujetos Obligados deben contar con Programas adecuados de
                Prevención de Lavado de Dinero y Financiamiento del Terrorismo
                para administrar los riesgos de reputación, legales y
                regulatorios que puedan enfrentar.
              </p>
              <Link href="/">
                <a className={styles.btn}>Leer más</a>
              </Link>
            </article>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.item}>
            <img src="images/slide4.png" />
            <article className={styles.article}>
              <h1 className={styles.title}>PROCESOS</h1>
              <p className={styles.text}>
                Realizar una revisión integral del negocio, según el alcance
                definido. Definir un PROCESO DE NEGOCIO, asignando
                responsabilidades, detallando tareas e identificando las
                diferentes áreas de negocio.
              </p>
              <Link href="/">
                <a className={styles.btn}>Leer más</a>
              </Link>
            </article>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.item}>
            <img src="images/slide5.png" />
            <article className={styles.article}>
              <h1 className={styles.title}>
                TECNOLOGÍA Y DESARROLLO DE SOLUCIONES INFORMÁTICAS
              </h1>
              <p className={styles.text}>
                Capital Consulting cuenta con una destacada Gerencia de
                Tecnología y Desarrollo de Soluciones Informáticas, quienes
                están avalados por la experiencia adquirida a lo largo de
                múltiples proyectos dentro de los entornos más exigentes.
              </p>
              <Link href="/">
                <a className={styles.btn}>Leer más</a>
              </Link>
            </article>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeSlider;
