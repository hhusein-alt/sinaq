import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoTicker from '@/components/LogoTicker';
import ExploreSection from '@/components/ExploreSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import EmployersSection from '@/components/EmployersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#030812]">
        <HeroSection />
        <LogoTicker />
        <ExploreSection />
        <HowItWorksSection />
        <EmployersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
