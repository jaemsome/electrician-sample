import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EmergencyBanner from '@/components/EmergencyBanner';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ComplianceBadges from '@/components/ComplianceBadges';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EmergencyBanner />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ComplianceBadges />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
