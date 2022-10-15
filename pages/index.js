import Header from "../components/layout/Header";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";
import FootNav from "../components/layout/FootNav";
import ScrollToTopBtn from "../components/layout/ScrollToTopBtn";

export default function Home() {
  return (
    <div role="page container" className="bg-darkBlue relative h-fit w-full">
      <Header />
      <main className="h-full w-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <div className="md:hidden">
        <FootNav />
      </div>
      <ScrollToTopBtn />
      <Footer />
    </div>
  );
}
