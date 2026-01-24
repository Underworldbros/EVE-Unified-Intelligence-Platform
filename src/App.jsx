import React, { useState, useEffect } from 'react'
import { Terminal, Shield, Activity, Database, ChevronRight, Zap, Box, Compass, Cpu, Globe2, CircleDollarSign, Map, ShieldCheck, ExternalLink, TrendingUp, Award, Coins, Crosshair, Calendar, Factory, BookOpen, UserSearch } from 'lucide-react'

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
  const domains = [
    {
      id: 'financial',
      icon: Coins,
      title: "Financial Intelligence",
      tagline: "ISK-CENTRIC OUTCOMES",
      desc: "Consolidated market activity, wallet tracking, and asset valuation. Defines the economic core of New Eden operations.",
      details: ["Market Browser & Arbitrage", "Wallet Flow Analysis", "Portfolio Net Worth", "Automated Appraisal"]
    },
    {
      id: 'activity',
      icon: BookOpen,
      title: "Activity Journal",
      tagline: "OPERATIONAL TRUTH",
      desc: "Source of truth for activity execution. Captures what happens in space—runs, sites, and encounters—for longitudinal analysis.",
      details: ["Structured Run Logging", "Loot & Spoils Section", "Fuzzy Universe Linking", "Performance Metrics"]
    },
    {
      id: 'map',
      icon: Compass,
      title: "Spatial Intelligence",
      tagline: "SITUATIONAL AWARENESS",
      desc: "The primary situational surface. Unifies universe topology with live activity, event pressure, and user-generated intel.",
      details: ["Dynamic Traffic Overlays", "System Pressure Index", "Route Intelligence", "User Annotations"]
    },
    {
      id: 'threat',
      icon: UserSearch,
      title: "Intelligence & Conflict",
      tagline: "THREAT HEURISTICS",
      desc: "Analyzes player behavior and combat activity. Correlates destruction events with market behavior and regional risk.",
      details: ["Player/Corp Lookup", "D-Scan Intelligence", "Market Spike Correlation", "Killboard Heuristics"]
    },
    {
      id: 'character',
      icon: Cpu,
      title: "Character Management",
      tagline: "CAPABILITY MODELING",
      desc: "Authoritative source of character capability. Mirrors in-game fitting tools while projecting skill-dependent outcomes.",
      details: ["Skill Training Planner", "Implant & Clone Awareness", "Ship Fitting Engine", "Alpha/Omega Enforcement"]
    },
    {
      id: 'industry',
      icon: Factory,
      title: "Industry & Supply Chain",
      tagline: "OPERATIONAL CONTROL",
      desc: "Operational center for manufacturing and logistics. Manages the physical flow of assets from input to extraction.",
      details: ["Active Job Management", "Production Chain Solver", "Blueprint Library", "PI Planetary Command"]
    },
    {
      id: 'time',
      icon: Calendar,
      title: "Time Intelligence",
      tagline: "TEMPORAL COORDINATION",
      desc: "Aligns in-game events, schedules, and milestones. Ensures temporal context is maintained across all planning phases.",
      details: ["ESI Event Ingestion", "Milestone Tracking", "EVE/Local Time Conversion", "Subscription Monitoring"]
    }
  ]

  const updates = [
    {
      date: "2026-01-24",
      chapter: "8",
      title: "Full SDE Hydration & Schema Expansion",
      body: "The core engine has achieved a new state of operational readiness. Current deployment focuses on full SDE hydration and schema expansion to enhance platform stability and intelligence throughput.",
      points: [
        "Full SDE hydration and schema expansion",
        "Integrate SDE data into Industry, Assets, and Map APIs",
        "Phase III UI integration and blueprint intelligence refinement",
        "Finalize production solver financials and UI polish",
        "Implement three-tier reorganization and management layer"
      ]
    },
    {
      date: "2026-01-24",
      chapter: "7",
      title: "Tactical Reorganization",
      body: "Platform architecture successfully transitioned to a three-tier deployment model. Isolated core intelligence from public-facing assets.",
      points: [
        "Established the 'EVE Dark' Public Landing Page",
        "Consolidated Design Documentation for community review",
        "Initialized local management protocols"
      ]
    }
  ]

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
        <button className="h-6 px-3 border border-eve-emerald/30 bg-eve-emerald/5 text-eve-emerald text-[9px] uppercase font-black tracking-widest hover:bg-eve-emerald/20 transition-all">
          ESTABLISH_NEURAL_LINK
        </button>
      </header>

      <main className="flex-grow z-10">
        {/* HERO AREA with Circular Orbit */}
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
              UNIFIED <span className="text-eve-emerald">STRATEGIC</span> PLATFORM
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto mb-12 tracking-wide uppercase">
              A high-density intelligence engine designed to consolidate Market, Spatial, and Industrial telemetry into a single unified interface.
            </p>
          </div>
          
          <TerminalTicker />
        </section>

        {/* DOMAIN MATRIX GRID */}
        <section id="intel" className="py-24 bg-primary-sidebar/20 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="panel-title mb-12">INTELLIGENCE.DOMAINS // FUNCTIONAL_SCOPE</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {domains.map((domain, i) => (
                <div key={i} className="p-6 border border-gray-800 bg-deep-space hover:border-eve-emerald/30 transition-all group relative overflow-hidden flex flex-col h-full shadow-lg">
                  <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <domain.icon size={120} />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <domain.icon className="w-6 h-6 text-eve-emerald" />
                    <span className="text-[8px] font-black tracking-[0.2em] text-gray-600 uppercase border border-gray-800 px-1.5 py-0.5">{domain.tagline}</span>
                  </div>
                  <h3 className="uppercase font-black tracking-widest text-[11px] text-white mb-3">{domain.title}</h3>
                  <p className="text-[10px] leading-relaxed text-gray-500 font-medium uppercase tracking-tight mb-6 flex-grow">{domain.desc}</p>
                  <div className="space-y-1.5 pt-4 border-t border-gray-800/50">
                    {domain.details.map((detail, j) => (
                      <div key={j} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-eve-emerald/40 rounded-full" />
                        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC PULSE UPDATES */}
        <section id="pulse" className="py-24 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="panel-title mb-2">STRATEGIC.PULSE // DEPLOYMENT_LOG</div>
                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Authorized synchronization reports from the development core.</p>
              </div>
              <a href="Dev_Blog.md" className="text-eve-emerald text-[9px] uppercase font-black tracking-[0.2em] hover:underline">ACCESS_ARCHIVE_FULL</a>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {updates.map((update, i) => (
                <div key={i} className="p-8 border border-gray-800 bg-panel-surface hover:bg-gray-800/10 transition-all group relative overflow-hidden shadow-2xl">
                  <div className="absolute right-0 top-0 p-4 font-mono text-[40px] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors leading-none">
                    CH_{update.chapter}
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-eve-emerald mb-1">STAMP // {update.date}</span>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">{update.title}</h3>
                    </div>
                    {i === 0 && (
                      <div className="flex items-center space-x-2 px-2 py-1 bg-eve-emerald/10 border border-eve-emerald/30">
                        <span className="w-1.5 h-1.5 bg-eve-emerald rounded-full animate-pulse" />
                        <span className="uppercase text-[8px] font-black tracking-widest text-eve-emerald">LATEST_SIGNAL</span>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium uppercase tracking-tight italic border-l-2 border-eve-emerald/20 pl-4 py-1">
                        {update.body}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-3">SYNCHRONIZATION_POINTS:</div>
                      {update.points.map((point, j) => (
                        <div key={j} className="flex items-start space-x-3 group/point">
                          <ChevronRight size={10} className="text-eve-emerald mt-0.5 group-hover/point:translate-x-1 transition-transform" />
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPOSITORY ARCHIVE */}
        <section id="docs" className="py-24 bg-primary-sidebar/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="panel-title mb-8">REPOSITORY.ARCHIVE</div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tactical mb-8 leading-none">
              PUBLIC DOCUMENTATION <br />
              <span className="text-gray-700">& ARCHITECTURAL SPECS</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
              <button className="h-12 px-8 bg-white text-deep-space font-black uppercase text-xs tracking-[0.3em] hover:bg-eve-emerald transition-colors flex items-center">
                BROWSE_DOCUMENTS <ExternalLink className="ml-3 w-4 h-4" />
              </button>
              <button className="h-12 px-8 border border-gray-800 text-gray-500 font-black uppercase text-xs tracking-[0.3em] hover:bg-gray-800 transition-colors">
                GITHUB_SOURCE
              </button>
            </div>
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
             <a href="https://github.com/Underworldbros/EVE-UIP-Public" target="_blank" rel="noreferrer" className="hover:text-eve-emerald transition-colors flex items-center gap-2">
                <ExternalLink size={10} /> PUBLIC_REPOSITORY
            </a>
            <span>CCP_GAMES // EVE_ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App