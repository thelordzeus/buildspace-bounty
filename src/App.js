import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Bounties from "./sections/Bounties";
import Leader from "./sections/Leader";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Footer } from "./sections/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={1} sticky={{ start: 0, end: 1 }}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1} sticky={{ start: 1, end: 0 }}>
          <Bounties />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1} sticky={{ start: 2, end: 1 }}>
          <Leader />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
