import React from "react";
import ContactLink from "./ContactLink/ContactLink";

const ContactLinks = () => {
  const socialMediaUrl = {
    wa: "https://api.whatsapp.com/send/?phone=34694412241&text&type=phone_number&app_absent=0",
    tel: "https://api.whatsapp.com/send/?phone=34694412241&text&type=phone_number&app_absent=0",
    ig: "https://www.instagram.com/magodelucasss/",
    mail: "mailto:mago@bryandelucas.com",
  };
  return (
    <div className="bg-bordo opacity-80 p-4 rounded-xl text-white flex flex-col text-center">
      <p className="font-bold text-xs md:text-xl pb-2">
        Información y contratación:
      </p>
      <ContactLink
        icon="/icons/whatsappWhite.svg"
        title="+34-694-21-22-41"
        target="inline-flex _blank"
        rel="noreferrer"
        href={socialMediaUrl.wa}
      />
      <ContactLink
        icon="/icons/instagramWhite.svg"
        title="/magodelucasss"
        target="inline-flex _blank"
        rel="noreferrer"
        href={socialMediaUrl.ig}
      />
      <ContactLink
        icon="/icons/mailWhite.svg"
        target="inline-flex _blank"
        title="mago@bryandelucas.com"
        rel="noreferrer"
        href={socialMediaUrl.mail}
      />
    </div>
  );
};

export default ContactLinks;
