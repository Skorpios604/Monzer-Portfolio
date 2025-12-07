import Lightning from './components/Lightning'

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
      <div className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none">
        <h1 className="text-4xl font-bold text-white tracking-wider">Lightning Background</h1>
      </div>
    </div>
  )
}

export default App
