import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-phantom-black via-phantom-gray-dark/50 to-phantom-black relative overflow-hidden">
      {/* Background layers */}
      <div className="cyber-pattern"></div>
      <div className="circuit-pattern"></div>
      <div className="scanline"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute cyberpunk-border opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 50}px`,
              height: `${Math.random() * 80 + 50}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 8 + 5}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-12 p-8 max-w-4xl">
          <div className="relative space-y-6">
            <h2 className="text-base text-phantom-red/70 font-orbitron tracking-[0.3em] uppercase">デジタルファントム</h2>
            <div className="relative px-4">
              <h1 
                data-text="DIGITALPHANTOMS"
                className="text-6xl font-bold cyber-text uppercase"
              >
                DIGITALPHANTOMS
              </h1>
              <div className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-phantom-red/20 to-transparent"></div>
            </div>
            <p className="text-sm text-gray-400 font-inter tracking-wider">クリエイティブの探求者</p>
          </div>

          <div className="cyberpunk-border bg-phantom-black/10 backdrop-blur-sm mx-auto">
            <div className="px-8 py-4 flex items-center justify-between text-phantom-red/40 font-inter text-sm">
              <span className="tracking-wider uppercase">System Status</span>
              <span className="font-mono">[ ONLINE ]</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 animate-pulse">
          <ArrowDownIcon className="h-5 w-5 text-phantom-red/40" />
        </div>

        {/* Minimal corner accents */}
        <div className="absolute top-8 left-8 w-32 h-px bg-gradient-to-r from-phantom-red/30 to-transparent"></div>
        <div className="absolute top-8 left-8 w-px h-32 bg-gradient-to-b from-phantom-red/30 to-transparent"></div>
        <div className="absolute bottom-8 right-8 w-32 h-px bg-gradient-to-l from-phantom-red/30 to-transparent"></div>
        <div className="absolute bottom-8 right-8 w-px h-32 bg-gradient-to-t from-phantom-red/30 to-transparent"></div>
      </section>
    </main>
  )
} 