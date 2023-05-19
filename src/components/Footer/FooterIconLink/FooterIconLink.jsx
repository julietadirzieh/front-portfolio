const FooterIconLink = ({ icon, title, href }) => {
  return (
    <a
      className="flex flex-row items-center text-center px-4 py-2"
      href={href}
      target="inline-flex _blank"
      rel="noreferrer"
      aria-label="Ir a la página del icono"
    >
      <img src={icon} alt="footer icons" className="h-6 pr-2" />
      <p className="hidden md:block md:text-xs lg:text-sm text-white hover:underline">
        {title}
      </p>
      <span className="text-white"></span>
    </a>
  );
};

export default FooterIconLink;
