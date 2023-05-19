import { motion } from "framer-motion";
import Phrases from "../components/Phrases/Phrases";
import { Image } from "cloudinary-react";

const BioSection = () => {
  return (
    <>
      <Phrases text="“La magia es esa sensación que recorre nuestro cuerpo cuando presenciamos algo que parecía ser imposible.”" />
      <section id="bio" className="w-full pt-10 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: "-70px" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-bordo text-center tracking-wide font-bold pb-6"
        >
          Biografía
        </motion.h1>
        <article className="grid grid-cols-1 lg:grid-cols-5">
          <div className="px-12 md:px-24 col-span-3 text-justify">
            <h3 className="leading-7 text-base ">
              Nacido en España, Bryan de Lucas es un ilusionista y mago
              profesional. Desde que empezó en la magia a los 11 años ha
              conseguido destacar gracias a su particular talento y sus
              invenciones mágicas, y si, invenciones, ya que gran parte del
              repertorio de Bryan es totalmente inventado por el.
            </h3>
            <h3 className="leading-7 text-base mt-3">
              A los 14 años arraso en GOT talent España logrando quedar
              subcampeón de todo el programa y consiguiendo millones de
              visualizaciones en internet, después apareció en más programas
              televisivos tanto aquí en españa como en Los Angeles, Hollywood.
            </h3>
            <h3 className="leading-7 text-base my-3">
              Dicen la mayoría de personas que presencian su magia, que ha
              nacido para ilusionar al mundo entero, siendo este mismo un
              prodigio de la magia. Cuando a Bryan le preguntan sobre su futuro,
              no tienen ninguna duda en decir que quiere ser uno de los mejores
              magos de la historia. Da igual donde, cuándo o cómo, es capaz de
              sorprender a cualquier persona, en cualquier circunstancia.
            </h3>
            <h2 className="text-center font-bold mt-4 italic-font text-lg">
              “Vive el imposible en tu evento, de mano de la mejor magia.”
            </h2>
          </div>
          <div className="col-span-2 md:px-24 lg:px-0 lg:pr-24 pt-3 py-12">
            <div className="grid grid-cols-2">
              <Image
                src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229422/BRYAN%20DE%20LUCAS/pruebamago_dhmcfx.webp"
                cloudName="dno4arq1n"
                className="w-full object-cover p-2 rounded-xl"
                alt="mago"
              />
              <Image
                src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229422/BRYAN%20DE%20LUCAS/pruebamago1_h9igyy.webp"
                cloudName="dno4arq1n"
                className="w-full h-full p-2 rounded-xl object-cover"
                alt="foto de mago"
              />
              <Image
                src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229422/BRYAN%20DE%20LUCAS/pruebamago1_h9igyy.webp"
                cloudName="dno4arq1n"
                className="w-full h-full p-2 rounded-xl object-cover"
                alt="bryan de lucas"
              />
              <Image
                src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229422/BRYAN%20DE%20LUCAS/pruebamago_dhmcfx.webp"
                cloudName="dno4arq1n"
                className="w-full h-full p-2 rounded-xl"
                alt="mago de lucas"
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default BioSection;
