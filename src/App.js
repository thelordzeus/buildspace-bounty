import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Bounties from "./sections/Bounties";
import LeaderBoard from "./sections/LeaderBoard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Parallax pages={2.5}>
        <ParallaxLayer offset={0} speed={1} sticky={{ start: 0, end: 1 }}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1} sticky={{ start: 1, end: 0 }}>
          <Bounties />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} speed={1} sticky={{ start: 2, end: 1 }}>
          <LeaderBoard />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
