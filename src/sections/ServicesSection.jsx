import Services from "../components/Services/Services";
import { motion } from "framer-motion";
import Phrases from "../components/Phrases/Phrases";
import ImgsServices from "../components/ImgsServices/ImgsServices";

const ServicesSection = () => {
  return (
    <>
      <Phrases text="“La magia tiene ese potencial de hacernos volver a ser niños, aunque sea sólo por un instante.”" />
      <section id="services" className="w-full bg-gray-light pt-10">
        <motion.h1
          initial={{ opacity: 0, y: "-70px" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-bordo text-center tracking-wide font-bold pb-6"
        >
          Servicios
        </motion.h1>
        <article>
          <h2 className="text-justify md:text-center leading-7 md:text-xl px-12 md:px-32 lg:px-60">
            Adivinaciones, viajes imposibles, transformaciones, lecturas de
            pensamiento, ordenamiento del caos, todo está magia y mucho más, al
            alcance de tu evento. La magia será adaptada para el tipo de público
            que asista a tu negocio/evento y así asegurar un disfrute y
            fascinación máxima.
          </h2>
          <h3 className="mt-2 text-center leading-7 md:text-lg px-12 md:px-32 lg:px-60">
            Los eventos se brindan tanto en inglés como en español.
          </h3>
          <Services />
          <h2 className="text-justify md:text-center leading-7 md:text-lg px-12 md:px-32 lg:px-60">
            Si cuentas con otro tipo de evento Bryan de Lucas adaptará su show
            para que podáis disfrutar de la mejor magia, a tan solo un palmo de
            vuestros ojos.
            <p className="leading-5 text-xs md:text-base pt-3 pb-10">
              | Cocktails | Eventos internacionales | Galas VIP | Televisión |
              Teatro | Eventos culturales |
            </p>
          </h2>
        </article>
        <ImgsServices />
      </section>
    </>
  );
};

export default ServicesSection;
