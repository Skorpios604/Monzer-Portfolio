import Lightning from './components/Lightning'
import Shuffle from './components/Shuffle'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full pointer-events-auto">
        <Shuffle
          text="REACT BITS"
          className="text-4xl text-white tracking-wider"
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
      </div>
    </div>
  )
}

export default App
