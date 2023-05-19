import FooterIconContainer from "../FooterIconContainer/FooterIconContainer";
import FooterIconLink from "../FooterIconLink/FooterIconLink";

const socialMediaUrl = {
  wa: "https://api.whatsapp.com/send/?phone=34694412241&text&type=phone_number&app_absent=0",
  tel: "https://api.whatsapp.com/send/?phone=34694412241&text&type=phone_number&app_absent=0",
  ig: "https://www.instagram.com/magodelucasss/",
  mail: "mailto:mago@bryandelucas.com",
};

const FooterContainer = () => {
  return (
    <div className="w-full fixed bottom-0 max-w-screen bg-gray-dark">
      <div className="bottom-0 mt-0 flex md:flex-row w-full list-none items-center flex-wrap justify-evenly">
        <div className="mt-0 align-top">
          <FooterIconContainer>
            <FooterIconLink
              icon="/icons/tel.svg"
              title="+34-694-21-22-41"
              href={socialMediaUrl.tel}
            />
            <FooterIconLink
              icon="/icons/instagram.svg"
              title="/magodelucasss"
              href={socialMediaUrl.ig}
            />
            <FooterIconLink
              icon="/icons/mail.svg"
              title="mago@bryandelucas.com"
              href={socialMediaUrl.mail}
            />
          </FooterIconContainer>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
