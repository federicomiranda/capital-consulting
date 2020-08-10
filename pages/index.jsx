import Head from "next/head";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import HomeText from "../components/HomeText";
import HomeServicios from "../components/HomeServicios";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>
            Capital Consulting - Consultora de empresas y organismos
          </title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />
      </div>

      <HomeSlider />
      <HomeText />
      <HomeServicios />
      <Contact />
    </>
  );
};

export default Home;
