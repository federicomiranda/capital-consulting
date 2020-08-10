import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import styles from "../styles/Links.module.css";

const Links = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Links - Capital Consulting</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />
      </div>

      <img className={styles.banner} src="/images/banner_links.png" alt="" />

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Links de interés</h2>

          <div className={styles.content}>
            <div>
              <h3>ECONOMÍA Y FINANZAS</h3>
              <ul>
                <li>
                  <a
                    href="https://www.argentina.gob.ar/economia"
                    target="_blank"
                  >
                    - www.mecon.gov.ar
                  </a>
                </li>
                <li>
                  <a href="http://www.bcra.gov.ar/" target="_blank">
                    - www.bcra.gov.ar
                  </a>
                </li>
                <li>
                  <a href="https://www.bcba.sba.com.ar/" target="_blank">
                    - www.bcba.sba.com.ar
                  </a>
                </li>
                <li>
                  <a href="https://www.cnv.gov.ar/sitioweb/" target="_blank">
                    - www.cnv.gob.ar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>SOBRE IMPUESTOS</h3>
              <ul>
                <li>
                  <a
                    href="http://www.afip.gov.ar/sitio/externos/default.asp"
                    target="_blank"
                  >
                    - www.afip.gov.ar
                  </a>
                </li>
                <li>
                  <a href="https://www.arba.gov.ar/" target="_blank">
                    - www.arba.gov.ar/
                  </a>
                </li>
                <li>
                  <a href="https://www.anses.gob.ar/" target="_blank">
                    - www.anses.gob.ar
                  </a>
                </li>
                <li>
                  <a href="https://www.agn.gob.ar/" target="_blank">
                    - www.agn.gov.ar
                  </a>
                </li>
                <li>
                  <a href="https://www.agip.gob.ar/" target="_blank">
                    - www.agip.gov.ar
                  </a>
                </li>
                <li>
                  <a href="http://www.agcba.gov.ar/web/" target="_blank">
                    - www.agcba.gov.ar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Prevención de lavado de dinero</h3>
              <ul>
                <li>
                  <a href="https://www.egmontgroup.org/" target="_blank">
                    - www.egmontgroup.org
                  </a>
                </li>
                <li>
                  <a href="https://www.un.org/" target="_blank">
                    - www.un.org
                  </a>
                </li>
                <li>
                  <a href="http://www.oas.org/en/" target="_blank">
                    - www.oas.org
                  </a>
                </li>
                <li>
                  <a href="http://www.bcra.gov.ar/" target="_blank">
                    - www.bcra.gov.ar
                  </a>
                </li>
                <li>
                  <a href="http://www.uif.gov.ar/" target="_blank">
                    - www.uif.gov.ar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Links;
