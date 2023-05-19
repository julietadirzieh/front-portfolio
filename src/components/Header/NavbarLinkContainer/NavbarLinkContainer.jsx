import React from "react";
import NavbarLink from "../NavbarLink/NavbarLink";

const NavbarLinkContainer = () => {
  return (
    <>
      <NavbarLink toSection="home" title="Inicio" />
      <NavbarLink toSection="bio" title="Biografía" />
      <NavbarLink toSection="services" title="Servicios" />
      <NavbarLink toSection="press" title="Prensa" />
      <NavbarLink toSection="contact" title="Contacto" />
    </>
  );
};

export default NavbarLinkContainer;
