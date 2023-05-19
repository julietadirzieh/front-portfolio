const ContactLink = ({ icon, title, href }) => {
  return (
    <a
      className="flex flex-row items-center text-center px-4 py-2 max-w-full"
      href={href}
      target="inline-flex _blank"
      rel="noreferrer"
      aria-label="Ir al link"
    >
      <img src={icon} alt="contact icons" className="h-6 pr-2" />
      <p className="md:text-lg text-white hover:underline">{title}</p>
    </a>
  );
};

export default ContactLink;
