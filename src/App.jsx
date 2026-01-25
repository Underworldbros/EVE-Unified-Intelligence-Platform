import React, { useState, useEffect } from 'react'
import { Terminal, Shield, Activity, Database, ChevronRight, Zap, Box, Compass, Cpu, Globe2, CircleDollarSign, Map, ShieldCheck, ExternalLink, TrendingUp, Award, Coins, Crosshair, Calendar, Factory, BookOpen, UserSearch, Camera, Lock, X } from 'lucide-react'

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
  const [selectedImage, setSelectedImage] = useState(null);

  // Definitive Scroll Lockout
  useEffect(() => {
    // 1. Disable browser's internal scroll memory
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Clear URL hashes that cause jumps
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // 3. Immediate and secondary scroll reset
    window.scrollTo(0, 0);
    const timer = setTimeout(() => window.scrollTo(0, 0), 50);
    
    return () => clearTimeout(timer);
  }, []);

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
      chapter: "MASTER_SYNC",
      title: "Consolidated Deployment: Foundation to Synthesis",
      body: "Strategic summary of platform evolution from initial authorization to current three-tier architecture. This update marks the completion of the foundational intelligence layer.",
      points: [
        "Project Genesis: Established core FastAPI/React architecture",
        "SDE Authority: Integrated local Static Data Export for zero-latency asset resolution",
        "Financial Module: Deployment of 'Wallet Standard' portfolio analysis",
        "Industrial Expansion: Bill of Materials solver and blueprint intelligence",
        "Multi-Character Synthesis: Atomic state syncing and contextual character sovereignty",
        "Tactical Reorganization: Migration to isolated engine/public/management layers"
      ]
    }
  ]

  const repoUrl = "https://github.com/Underworldbros/EVE-UIP-Public";
  const docsUrl = `${repoUrl}/blob/main/docs/DESIGN/README.md`;
  const baseUrl = import.meta.env.BASE_URL;

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
          <a href="#visuals" className="hover:text-eve-emerald transition-colors">Visuals</a>
          <a href="#pulse" className="hover:text-eve-emerald transition-colors">Pulse</a>
          <a href="#docs" className="hover:text-eve-emerald transition-colors">Archive</a>
        </nav>
        <a 
          href="https://discord.gg/dTMhyZ5kew" 
          target="_blank" 
          rel="noreferrer"
          className="h-6 px-3 border border-eve-emerald/30 bg-eve-emerald/5 text-eve-emerald text-[9px] uppercase font-black tracking-widest hover:bg-eve-emerald/20 transition-all flex items-center gap-2"
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.739 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
          </svg>
          ESTABLISH_NEURAL_LINK
        </a>
      </header>

      <main className="flex-grow z-10">
        {/* HERO AREA */}
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

        {/* DATA PREVIEW */}
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

        {/* SYSTEM SCREENSHOTS */}
        <section id="visuals" className="py-24 border-b border-gray-800/50 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="panel-title mb-12 flex items-center space-x-2">
              <Camera size={14} className="text-eve-emerald" />
              <span>SYSTEM.VISUALS // TACTICAL_INTERFACE</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Portfolio Overview", file: "Wallet_Overview.png", id: "01" },
                { title: "Mining Intelligence", file: "Mining_Ledger.png", id: "02" },
                { title: "Neural Simulation", file: "Implant_Sim.png", id: "03" }
              ].map((img, i) => (
                <div 
                  key={i} 
                  className="aspect-video bg-[#0c0c0c] border border-gray-800 relative overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={`${baseUrl}${img.file}`} 
                    alt={img.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-60 pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[10px] font-black tracking-tactical text-eve-emerald uppercase">{img.title}</div>
                    <div className="text-[8px] font-mono text-gray-600 mt-1">FEED_STAMP // {img.id}</div>
                  </div>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gray-800 group-hover:border-eve-emerald/30 transition-colors" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gray-800 group-hover:border-eve-emerald/30 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC PULSE UPDATES */}
        <section id="pulse" className="py-24 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="panel-title mb-12">STRATEGIC.PULSE // DEPLOYMENT_LOG</div>
            <div className="grid grid-cols-1 gap-6">
              {updates.map((update, i) => (
                <div key={i} className="p-8 border border-gray-800 bg-panel-surface hover:bg-gray-800/10 transition-all group relative overflow-hidden shadow-2xl">
                  <div className="absolute right-0 top-0 p-4 font-mono text-[40px] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors leading-none">
                    {update.chapter}
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-eve-emerald mb-1">STAMP // {update.date}</span>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">{update.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2 px-2 py-1 bg-eve-emerald/10 border border-eve-emerald/30">
                      <span className="w-1.5 h-1.5 bg-eve-emerald rounded-full animate-pulse" />
                      <span className="uppercase text-[8px] font-black tracking-widest text-eve-emerald">MASTER_SIGNAL</span>
                    </div>
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
            <div className="flex justify-center items-center gap-4 mt-12">
              <a 
                href={docsUrl} 
                target="_blank" 
                rel="noreferrer"
                className="h-12 px-8 bg-white text-deep-space font-black uppercase text-xs tracking-[0.3em] hover:bg-eve-emerald transition-colors flex items-center"
              >
                BROWSE_DOCUMENTS <ExternalLink className="ml-3 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FULL-SCREEN ZOOM MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
            {/* Top Tactical Bar */}
            <div className="w-full flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-eve-emerald rounded-full animate-pulse" />
                <span className="panel-title !text-white !tracking-widest">{selectedImage.title}</span>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <img 
              src={`${baseUrl}${selectedImage.file}`} 
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(52,211,153,0.1)] border border-gray-800"
            />

            <div className="mt-6 text-[9px] font-black tracking-[0.4em] text-gray-600 uppercase">
              // TACTICAL_INTERFACE_DATA_DUMP_COMPLETE //
            </div>
          </div>
        </div>
      )}

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
             <a href={repoUrl} target="_blank" rel="noreferrer" className="hover:text-eve-emerald transition-colors flex items-center gap-2 text-gray-600">
                <ExternalLink size={10} /> PUBLIC_REPOSITORY
            </a>
            <a href="https://www.eveonline.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer text-gray-600">
              CCP_GAMES // EVE_ONLINE
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
