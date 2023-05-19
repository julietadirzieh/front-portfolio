import { Link } from "react-scroll";
import NavbarHamburguer from "../NavbarHamburguer/NavbarHamburguer";
import NavbarLinkContainer from "../NavbarLinkContainer/NavbarLinkContainer";

const Navbar = () => {
  return (
    <>
      <nav className="fixed bg-gray-dark top-0 w-full z-30 p-2 h-auto grid grid-cols-2 md:grid-cols-1 items-center justify-between mx-auto max-w-full">
        <Link
          to="home"
          className="md:mx-auto md:w-52 align-middle my-auto items-center"
          aria-label="Ir a Inicio"
        >
          <img src="/icons/logoNew.png" alt="logo" width="200px" />
          <p className="text-bordo text-center font-bold tracking-widest text-[.65rem] max-w-[200px]  md:text-xs">
            Magia exclusiva
          </p>
        </Link>
        <hr className="hidden md:block md:border-1 md:border-white md:w-3/4 lg:w-2/4 mx-auto my-2" />
        <div className="hidden md:flex md:flex-row justify-center md:w-3/4 lg:w-2/4 mx-auto my-0">
          <NavbarLinkContainer />
        </div>
        <div className="flex md:hidden w-auto justify-end">
          <NavbarHamburguer />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
