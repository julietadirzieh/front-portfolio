import Reviews from "../components/Reviews/Reviews";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { motion } from "framer-motion";
import Phrases from "../components/Phrases/Phrases";
import Notes from "../components/Notes/Notes";

const PressSection = () => {
  return (
    <>
      <Phrases text="“En un mundo lleno de estímulos e información, sólo las experiencias memorables calan hondo en nuestro corazón, y la magia es una de ellas.”" />
      <section id="press" className="w-full pt-10 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: "-70px" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-bordo text-center tracking-wide font-bold pb-6"
        >
          Prensa
        </motion.h1>
        <VideoPlayer />
        <Notes />
        <Reviews />
      </section>
    </>
  );
};

export default PressSection;
