import styles from "../styles/ServicesAreas.module.css";
import Card from "../components/Card";

const ServicesAreas = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>ÁREAS DE CAPITAL CONSULTING</h2>

        <Card
          title="Economía y finanzas"
          text="La Gerencia de Economía y Finanzas procesa y analiza la información de manera crítica para la elaboración de indicadores, publicaciones, investigaciones especiales y proyecciones a fin de que nuestros clientes puedan maximizar las oportunidades de negocios y disminuir la incertidumbre generada por el fluctuante entorno económico-financiero."
          img="/images/card1-img.png"
          icon="/images/card1-icon.png"
        />

        <Card
          title="IMPUESTOS"
          text="Nuestros expertos cuentan con un conocimiento profundo de las leyes y reglamentaciones tributarias. Por ello podemos ofrecerle una amplia gama de servicios para que, además de cumplir adecuadamente con sus obligaciones fiscales, obtenga los máximos beneficios de las disposiciones vigentes."
          img="/images/card2-img.png"
          icon="/images/card2-icon.png"
        />

        <Card
          title="prevención de lavado de dinero Y FINANCIAMIENTO DEL TERRORISMO"
          text="Los Sujetos Obligados deben contar con Programas adecuados de Prevención de Lavado de Dinero y Financiamiento del Terrorismo para administrar los riesgos de reputación, legales y regulatorios que puedan enfrentar."
          img="/images/card3-img.png"
          icon="/images/card3-icon.png"
        />

        <Card
          title="Procesos"
          text="Realizar una revisión integral del negocio, según el alcance definido. Definir un PROCESO DE NEGOCIO, asignando responsabilidades, detallando tareas e identificando las diferentes áreas de negocio."
          img="/images/card4-img.png"
          icon="/images/card4-icon.png"
        />

        <Card
          title="TECNOLOGÍA Y DESARROLLO DE SOLUCIONES INFORMÁTICAS"
          text="Capital Consulting cuenta con una destacada Gerencia de Tecnología y Desarrollo de Soluciones Informáticas, quienes están avalados por la experiencia adquirida a lo largo de múltiples proyectos dentro de los entornos más exigentes."
          img="/images/card5-img.png"
          icon="/images/card5-icon.png"
        />
      </div>
    </section>
  );
};

export default ServicesAreas;
