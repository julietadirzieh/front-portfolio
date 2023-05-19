import { motion } from "framer-motion";
import ContactLinks from "../components/ContactLinks/ContactLinks";
import Phrases from "../components/Phrases/Phrases";
import { Image } from "cloudinary-react";

const ContactSection = () => {
  return (
    <>
      <Phrases text="“La magia consiste en desafiar aquello que parece ser imposible.”" />
      <motion.h1
        initial={{ opacity: 0, y: "-70px" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pb-6 pt-12 text-4xl text-bordo text-center tracking-wide font-bold bg-gray-light"
      >
        Contacto
      </motion.h1>
      <section id="contact" className="w-full relative bg-gray-light">
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229421/BRYAN%20DE%20LUCAS/img3_mwvxyo.webp"
            cloudName="dno4arq1n"
            className="w-full h-90vh object-cover grayscale"
            alt="mago en byn"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <ContactLinks />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
