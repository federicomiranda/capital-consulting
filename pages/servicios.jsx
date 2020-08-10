import Head from "next/head";
import Header from "../components/Header";
import ServicesAreas from "../components/ServicesAreas";
import Contact from "../components/Contact";

const Servicios = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Servicios - Capital Consulting</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />
      </div>

      <ServicesAreas />
      <Contact />
    </>
  );
};

export default Servicios;
