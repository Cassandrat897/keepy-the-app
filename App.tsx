import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InstallGuide } from './components/InstallGuide';
import { Story } from './components/Story';
import { Footer } from './components/Footer';
import { Bubbles } from './components/Bubbles';
import { ScrollProgress } from './components/ScrollProgress';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative min-h-screen bg-[#fafafa] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grain"></div>
      <ScrollProgress />
      <Bubbles />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <HowItWorks />
          <InstallGuide />
          <Story />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;