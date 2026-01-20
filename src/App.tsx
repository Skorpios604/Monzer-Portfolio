import Lightning from './components/Lightning'
import Shuffle from './components/Shuffle'
import DecryptedText from './components/DecryptedText'
import ShatterButton from './components/ShatterButton'
import GridScan from './components/GridScan'
import SplashCursor from './components/SplashCursor'
import { CommitsGridDemo } from './components/CommitsGridDemo'

function App() {
  const scrollToSimulation = () => {
    const element = document.getElementById('simulation-section');
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 2000; // 2000ms = 2 seconds (slower transition)
      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // Ease-in-out cubic easing for smooth feel
        const ease = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(0, startPosition + distance * ease(percentage));

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  };

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
      <SplashCursor SPLAT_RADIUS={0.01} />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Lightning
            hue={270}
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-auto gap-4">
          <Shuffle
            text="Monzer Mourad"
            className="text-2xl sm:text-4xl md:text-[2.75rem] text-[hsl(300,100%,65%)] tracking-widest text-center px-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
          <DecryptedText
            text="Codesmith of digital realms"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={100}
            parentClassName="text-xl sm:text-3xl md:text-[2.20rem] text-white text-center px-4"
            className=""
            encryptedClassName="text-white"
          />
          <div className="mt-8">
            <ShatterButton
              shatterColor="#9b5de5"
              textColor="#ff00ff"
              shatterColors={["#9b5de5", "#ff00ff"]}
              onClick={scrollToSimulation}
            >
              Run Simulation
            </ShatterButton>
          </div>
        </div>
      </div>

      <div id="simulation-section" className="w-full min-h-screen relative bg-black">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost={false}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div id="commits-section" className="w-full min-h-screen relative bg-black flex items-center justify-center p-4">
        <CommitsGridDemo />
      </div>
    </div>
  )
}

export default App
