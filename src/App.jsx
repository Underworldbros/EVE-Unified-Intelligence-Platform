import React, { useState, useEffect } from 'react'
import { Terminal, Shield, Activity, Database, ChevronRight, Zap, Box, Compass, Cpu, Globe2, CircleDollarSign, Map, ShieldCheck, ExternalLink, TrendingUp, Award, Coins } from 'lucide-react'

const PHRASES = [
  "SYNCHRONIZING WITH TRANQUILITY CLUSTER...",
  "BYPASSING CONCORD TRAFFIC CONTROL PROTOCOLS...",
  "OPTIMIZING NEURAL INTERFACE PARAMETERS...",
  "WARP DRIVE ACTIVE. DESTINATION: MAXIMUM PROFIT.",
  "MINING THE SALT OF A THOUSAND LOSERS.",
  "SCANNING FOR CLOAKED CYNO SIGNALS...",
  "DOCKING REQUEST GRANTED. WELCOME PILOT.",
  "POD FLUID AT NOMINAL TEMPERATURES.",
  "CALCULATING ESCAPE VELOCITY FROM DEBT.",
  "NEURAL TICKET: ISK IS THE ONLY TRUE GOD.",
  "STATION SPINNING: 100% OPERATIONAL EFFICIENCY.",
  "UPDATING THREAT HEURISTICS AND SPI METRICS...",
  "THE EVE GATE COLLAPSED. WE REMAIN UNBOWED.",
  "MARKET DATA RELAY: JITA IV-4 IS OVERCROWDED.",
  "LOGISTICS WIN WARS. ISK WINS EVERYTHING ELSE.",
  "EVE INTELLIGENCE: YOUR SECOND BRAIN IN EDEN.",
]

const TerminalTicker = () => {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let timeout
    const phrase = PHRASES[index]
    let i = 0

    const materialize = () => {
      if (i <= phrase.length) {
        const noise = "!@#$%^&*()_+<>?".charAt(Math.floor(Math.random() * 15))
        const current = phrase.substring(0, i)
        setDisplayText(i < phrase.length ? current + noise : current)
        timeout = setTimeout(() => { i++; materialize() }, 30)
      } else {
        timeout = setTimeout(() => {
          setDisplayText('')
          setIndex((prev) => (prev + 1) % PHRASES.length)
        }, 4000)
      }
    }

    materialize()
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <div className="w-full bg-black/40 border-y border-eve-emerald/10 py-1.5 px-4 flex items-center justify-center overflow-hidden h-8">
      <div className="font-mono text-[10px] text-eve-emerald/80 tracking-widest uppercase truncate text-center">
        {displayText}
        <span className="w-1.5 h-3 bg-eve-emerald/50 inline-block ml-1 animate-pulse" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-deep-space text-gray-400 relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-grid-tactical opacity-20 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="scanline-move" />
      
      {/* HUD HEADER */}
      <header className="h-10 flex items-center justify-between px-4 border-b border-gray-800/50 bg-primary-sidebar/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-1.5 h-1.5 bg-eve-emerald rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="panel-title !text-white !tracking-widest">EVE // UNIFIED INTELLIGENCE</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-[10px] uppercase font-black tracking-tactical text-gray-500">
          <a href="#intel" className="hover:text-eve-emerald transition-colors">Intelligence</a>
          <a href="#pulse" className="hover:text-eve-emerald transition-colors">Strategic Pulse</a>
          <a href="#docs" className="hover:text-eve-emerald transition-colors">Archive</a>
        </nav>
        <button className="h-6 px-3 border border-eve-emerald/30 bg-eve-emerald/5 text-eve-emerald text-[9px] uppercase font-black tracking-widest hover:bg-eve-emerald/20">
          ESTABLISH_NEURAL_LINK
        </button>
      </header>

      <main className="flex-grow z-10">
        {/* HERO AREA with Circular Orbit (1:1 from Login) */}
        <section className="relative pt-24 pb-12 border-b border-gray-800/50 flex flex-col items-center overflow-hidden">
           <div className="relative w-64 h-64 flex items-center justify-center mb-12">
            <div className="absolute inset-0 border border-eve-emerald/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border border-dashed border-eve-emerald/20 rounded-full animate-spin-slow-reverse" />
            <div className="relative z-10 text-eve-emerald drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              <Globe2 size={160} strokeWidth={0.5} />
            </div>
            {/* Orbital Flairs */}
            <div className="absolute inset-0 animate-spin-slow opacity-60">
              {[CircleDollarSign, Activity, Map, Zap, Crosshair].map((Icon, i) => (
                <div key={i} className="absolute top-1/2 left-1/2" style={{ transform: `rotate(${i * 72}deg) translateY(-140px) rotate(-${i * 72}deg)` }}>
                  <Icon size={20} className="text-eve-emerald" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tactical text-white uppercase mb-4">
              UNIFIED <span className="text-eve-emerald">STRATEGIC</span> COMMAND
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto mb-12 tracking-wide uppercase">
              A military-grade decision support platform consolidating Market, Spatial, and Industrial telemetry into a single tactical interface.
            </p>
          </div>
          
          <TerminalTicker />
        </section>

        {/* DATA PREVIEW (1:1 from Wallet Overview) */}
        <section className="py-20 bg-primary-sidebar/20 relative border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="panel-title mb-12 text-center">PORTFOLIO.NET_WORTH // LIVE_SIMULATION</div>
            
            <div className="bg-[#0a0a0a] border border-gray-800 p-8 shadow-2xl relative overflow-hidden group hover:border-eve-emerald/40 transition-all">
              <div className="absolute -top-4 -right-4 transition-all duration-200 rotate-12 pointer-events-none opacity-5 group-hover:opacity-20">
                <CircleDollarSign size={200} className="text-eve-emerald" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12 relative z-10">
                <div className="text-center flex-1">
                  <div className="flex items-center justify-center gap-2 text-scc-amber opacity-80 mb-2">
                    <span className="text-[9px] font-black uppercase tracking-widest">PLEX Vault</span>
                    <Coins size={18} />
                  </div>
                  <div className="text-xl font-bold font-mono text-white">4,250,000,000 <span className="text-[10px] text-gray-600 ml-1 font-black">ISK</span></div>
                </div>

                <div className="text-center flex-[2] border-x border-gray-800/30 px-8">
                  <div className="text-xs text-eve-emerald font-black uppercase tracking-tactical mb-2">Portfolio Net Worth</div>
                  <div className="text-5xl md:text-7xl font-bold font-mono tracking-tight text-white leading-none">
                    124,402,851,204.00
                  </div>
                </div>

                <div className="text-center flex-1">
                  <div className="flex items-center justify-center gap-2 text-naval-blue opacity-80 mb-2">
                    <Award size={18} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Total LP</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white">1,402,000,000 <span className="text-[10px] text-gray-600 ml-1 font-black">ISK</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: 'Liquid', val: '42,402,100,204.00' },
                  { label: 'Escrow', val: '12,000,000,000.00' },
                  { label: 'Sells', val: '8,402,000,000.00' },
                  { label: 'Assets', val: '58,402,000,000.00' },
                  { label: 'Industry', val: '3,196,751,000.00' }
                ].map((s, i) => (
                  <div key={i} className="bg-[#111] p-3 border border-gray-800 flex flex-col items-center justify-center text-center">
                    <div className="text-[9px] text-gray-600 uppercase font-black tracking-widest mb-1">{s.label}</div>
                    <div className="text-[11px] font-mono text-gray-400">{s.val} <span className="text-[8px] opacity-50 ml-0.5 uppercase">ISK</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DOMAIN SECTIONS (Lucide based, tactical dark) */}
        <section id="intel" className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Market Signals", desc: "Heuristic price resolution and recursive Bill of Materials tracking with character skill modifiers." },
              { icon: Compass, title: "Spatial Intel", desc: "Universe mapping with live traffic overlays and System Pressure Index modeling." },
              { icon: ShieldCheck, title: "Threat Awareness", desc: "zKill-driven pilot evaluation and conflict density heatmaps across multiple security sectors." }
            ].map((domain, i) => (
              <div key={i} className="p-8 border border-gray-800 bg-panel-surface hover:border-eve-emerald/30 transition-all group">
                <domain.icon className="w-10 h-10 text-eve-emerald mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="uppercase font-black tracking-widest text-xs text-white mb-4">{domain.title}</h3>
                <p className="text-[11px] leading-relaxed text-gray-500 font-medium uppercase tracking-tight">{domain.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* TACTICAL FOOTER */}
      <footer className="h-12 border-t border-gray-800/50 bg-primary-sidebar/80 backdrop-blur-sm shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-gray-600">
          <div className="flex items-center space-x-6">
            <span>&copy; 2026 EVE_UNIFIED_INTELLIGENCE</span>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-eve-emerald rounded-full" />
              <span>TERMINAL_READY</span>
            </div>
          </div>
          <div className="flex space-x-6">
             <a href="https://zzeve.com/" target="_blank" rel="noreferrer" className="hover:text-eve-emerald transition-colors flex items-center gap-2">
                <ExternalLink size={10} /> PROJECT_NET
            </a>
            <span>CCP_GAMES // EVE_ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
