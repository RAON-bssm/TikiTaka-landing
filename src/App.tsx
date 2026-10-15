import CharacterSection from '@/components/sections/CharacterSection';
import DownloadSection from '@/components/sections/DownloadSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import HomeBaseSection from '@/components/sections/HomeBaseSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <HomeBaseSection />
        <CharacterSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
