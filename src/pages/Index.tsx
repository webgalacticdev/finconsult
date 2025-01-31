import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BlogSection from '../components/BlogSection';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';
import CookieConsent from '../components/CookieConsent';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <BlogSection />
        <ContactForm />
        <LocationMap />
      </main>
      <CookieConsent />
      <Footer />
    </div>
  );
};

export default Index;