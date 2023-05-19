import { Image } from "cloudinary-react";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <>
      <div id="home" className="pt-6 md:pt-16"></div>
      <section className="w-full m-0 p-0 bg-black h-screen flex justify-center">
        <div className="m-0 p-0">
          <Image
            src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229421/BRYAN%20DE%20LUCAS/img3_mwvxyo.webp"
            cloudName="dno4arq1n"
            className="md:w-full h-full object-cover md:object-contain"
            alt="mago de lucas"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="hidden md:flex m-0 p-0"
        >
          <Image
            src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229421/BRYAN%20DE%20LUCAS/img3_mwvxyo.webp"
            cloudName="dno4arq1n"
            className="w-full h-full object-contain"
            alt="mago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="hidden md:flex m-0 p-0"
        >
          <Image
            src="https://res.cloudinary.com/dno4arq1n/image/upload/v1683229421/BRYAN%20DE%20LUCAS/img3_mwvxyo.webp"
            cloudName="dno4arq1n"
            className="w-full h-full object-contain"
            alt="mago bryan de lucas"
          />
        </motion.div>
      </section>
    </>
  );
};

export default HomeSection;
