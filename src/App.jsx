import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import ImageTrailDemo from "./components/ImageTrailDemo";
import Menu from "./components/Menu";
import Events from "./components/Events";
import About from "./components/About";
import HoursLocation from "./components/HoursLocation";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

// Export contexts if we want children to consume the animation state
export const AnimationContext = React.createContext({ isWelcomeComplete: true });

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [maskExpanded, setMaskExpanded] = useState(false);
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);

  useEffect(() => {
    // // Temporarily disable localStorage check for easy testing
    // const hasVisited = localStorage.getItem('hasVisited');
    // if (hasVisited) {
    //   setShowWelcome(false);
    //   setMaskExpanded(true);
    //   setIsWelcomeComplete(true);
    // } else {
      // Stage 4 (stain expansion) starts at 2.4s
      const t = setTimeout(() => {
        setMaskExpanded(true);
      }, 2400);
      return () => clearTimeout(t);
    // }
  }, []);

  const handleWelcomeComplete = React.useCallback(() => {
    setShowWelcome(false);
    setIsWelcomeComplete(true);
    localStorage.setItem('hasVisited', 'true');
  }, []);

  return (
    <AnimationContext.Provider value={{ isWelcomeComplete }}>
      {/* Background layer for Welcome Screen */}
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}

      <div className="relative z-10 min-h-screen w-full">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(255, 252, 248)" 
          gradientBackgroundEnd="rgb(243, 232, 219)"
          firstColor="235, 215, 195"
          secondColor="210, 180, 155"
          thirdColor="248, 238, 225"
          fourthColor="225, 195, 175"
          fifthColor="240, 220, 200"
          pointerColor="210, 180, 155"
        >
          <Navbar />
          <Hero />
          <Showcase />
          <About />
          <ImageTrailDemo />
          <Menu />
          <Events />
          <HoursLocation />
          <CTA />
          <Footer />
        </BackgroundGradientAnimation>
      </div>
    </AnimationContext.Provider>
  );
}

export default App;
