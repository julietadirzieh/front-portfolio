import { Link } from "react-scroll";

const NavbarLink = ({ title, toSection }) => {
  return (
    <li className="activeNav w-full text-center flex flex-col items-center justify-center py-4 md:py-0">
      <Link
        to={toSection}
        className="text-center uppercase font-bold text-white scale-95 md:hover:text-bordo hover:scale-100 hover:underline md:hover:no-underline"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        aria-label="Ir a la sección"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavbarLink;
