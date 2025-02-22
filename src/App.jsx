import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProductCarousel from "./components/ProductCarousel";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductCarousel />
      <PricingSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;


