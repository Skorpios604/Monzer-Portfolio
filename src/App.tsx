import Lightning from './components/Lightning'
import Shuffle from './components/Shuffle'
import DecryptedText from './components/DecryptedText'
import ShatterButton from './components/ShatterButton'

function App() {
  return (
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
          className="text-[2.75rem] text-[hsl(300,100%,65%)] tracking-widest"
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
          parentClassName="text-[2.20rem] text-white"
          className=""
          encryptedClassName="text-white"
        />
        <div className="mt-8">
          <ShatterButton
            shatterColor="#9b5de5"
            textColor="#ff00ff"
            shatterColors={["#9b5de5", "#ff00ff"]}
          >
            Run Simulation
          </ShatterButton>
        </div>
      </div>
    </div>
  )
}

export default App
