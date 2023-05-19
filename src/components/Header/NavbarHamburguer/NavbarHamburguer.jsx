import NavbarLinkContainer from "../NavbarLinkContainer/NavbarLinkContainer";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Toggle } from "./Toggle";
import { useNavbar } from "../../../hooks/useNavbar";

const sidebar = {
  open: {
    clipPath: `circle(40px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavbarHamburguer = () => {
  const { isOpen, openNavbar, onClose, toggleNavbar } = useNavbar();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClose]);
  return (
    <>
      <motion.nav
        ref={ref}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="text-bordo" variants={sidebar} />
        <div
          className={
            isOpen
              ? "absolute w-full h-auto top-14 right-0 p-6 rounded-b-xl bg-bordo opacity-83 z-40 md:pr-16 flex flex-col justify-evenly align-center"
              : "hidden"
          }
          variants={variants}
        >
          <NavbarLinkContainer />
        </div>
        <Toggle toggle={() => toggleNavbar()} />
      </motion.nav>
    </>
  );
};

export default NavbarHamburguer;
