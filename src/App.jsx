import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import HomeSection from "./sections/HomeSection";
import BioSection from "./sections/BioSection";
import ServicesSection from "./sections/ServicesSection";
import PressSection from "./sections/PressSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <BioSection />
      <ServicesSection />
      <PressSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
