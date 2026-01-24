import React from 'react'
import { Terminal, Shield, Activity, Database, ChevronRight, Zap, Box, Compass, Cpu } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-deep-space text-gray-400 neural-weave overflow-x-hidden">
      {/* HUD HEADER LINE (Doctrine IV.2) */}
      <header className="h-10 flex items-center justify-between px-4 border-b border-gray-800/50 bg-primary-sidebar/80 backdrop-blur-sm sticky top-0 z-50 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <div className="w-1.5 h-1.5 bg-eve-emerald rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="panel-title !text-white !tracking-widest">UID // CORE TERMINAL</span>
          </div>
          <div className="h-4 border-r border-gray-800/50 hidden sm:block" />
          <div className="hidden sm:flex items-center space-x-4 text-[9px] uppercase font-black tracking-widest text-gray-600">
            <span className="hover:text-eve-emerald transition-colors cursor-pointer">SDE.SYNCHRONIZED</span>
            <span className="hover:text-eve-emerald transition-colors cursor-pointer">ESI.ONLINE</span>
            <span className="hover:text-eve-emerald transition-colors cursor-pointer">THREAT.MONITOR</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 text-[10px] uppercase font-bold tracking-widest">
            <a href="#intel" className="hover:text-eve-emerald transition-colors">Intelligence</a>
            <a href="#pulse" className="hover:text-eve-emerald transition-colors">Strategic Pulse</a>
            <a href="#docs" className="hover:text-eve-emerald transition-colors">The Archive</a>
          </nav>
          <button className="h-6 px-3 border border-eve-emerald/30 bg-eve-emerald/5 text-eve-emerald text-[9px] uppercase font-black tracking-widest hover:bg-eve-emerald/20 transition-all cursor-pointer">
            ACCESS_KEY.REQUIRED
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col relative">
        {/* HERO SECTION - TACTICAL BRIEFING STYLE */}
        <section className="relative py-32 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="inline-block mb-4">
              <span className="uppercase font-black tracking-[0.4em] text-xs text-eve-emerald border-b border-eve-emerald/30 pb-1">
                EVE UNIFIED INTELLIGENCE
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-8">
              TACTICAL <br />
              <span className="text-gray-800">DECISION</span> <br />
              SUPPORT
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl font-medium mb-8">
                  A high-density intelligence engine designed to consolidate Market, Spatial, and Industrial telemetry into a single unified interface. Engineered for multi-character sovereignty.
                </p>
                <div className="flex space-x-4">
                  <button className="h-10 px-6 bg-eve-emerald text-deep-space font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors flex items-center">
                    VIEW_SPECIFICATIONS <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="h-10 px-6 border border-gray-800 text-gray-400 font-black uppercase text-[10px] tracking-widest hover:bg-gray-800 transition-colors">
                    GIT_ARCHIVE
                  </button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="p-4 border border-gray-800 bg-panel-surface shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Zap className="w-24 h-24 text-eve-emerald" />
                  </div>
                  <div className="relative z-10">
                    <div className="panel-title mb-4">PLATFORM.TELEMETRY</div>
                    <div className="space-y-3">
                      {[
                        { label: "Market Latency", val: "0.042ms", color: "text-eve-emerald" },
                        { label: "SDE Authority", val: "STABLE", color: "text-eve-emerald" },
                        { label: "Neural Mapping", val: "ACTIVE", color: "text-eve-emerald" },
                        { label: "System Pressure", val: "LOW_SIGNAL", color: "text-scc-amber" }
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                          <span className="uppercase text-[9px] font-bold tracking-wider text-gray-600">{stat.label}</span>
                          <span className={`font-mono text-[10px] font-bold ${stat.color}`}>{stat.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="singularity-gate">
            <div className="event-horizon animate-pulse" />
          </div>
        </section>

        {/* DOMAIN MATRIX (Doctrine IV.2) */}
        <section id="intel" className="py-24 bg-primary-sidebar/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="panel-title mb-12">INTELLIGENCE.DOMAINS</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: Database, title: "SDE Authority", desc: "Local Static Data Export anchoring for zero-latency asset resolution and station identification." },
                { icon: Activity, title: "Market Signals", desc: "Heuristic price resolution and recursive Bill of Materials tracking with character skill modifiers." },
                { icon: Compass, title: "Spatial Intel", desc: "EVEeye-inspired universe mapping with live traffic overlays and System Pressure modeling." },
                { icon: Shield, title: "Threat Analysis", desc: "zKill-driven pilot evaluation and conflict density heatmaps across multiple security sectors." }
              ].map((domain, i) => (
                <div key={i} className="p-6 border border-gray-800 bg-deep-space hover:border-eve-emerald/30 transition-all group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <domain.icon className="w-24 h-24" />
                  </div>
                  <domain.icon className="w-6 h-6 text-eve-emerald mb-4" />
                  <h3 className="uppercase font-black tracking-widest text-[11px] text-white mb-3">{domain.title}</h3>
                  <p className="text-[10px] leading-relaxed text-gray-500 font-medium">{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC PULSE */}
        <section id="pulse" className="py-24 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="panel-title mb-2">STRATEGIC.PULSE</div>
                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Latest tactical synchronization reports.</p>
              </div>
              <a href="Dev_Blog.md" className="text-eve-emerald text-[9px] uppercase font-black tracking-[0.2em] hover:underline">ACCESS_ARCHIVE_FULL</a>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border border-gray-800 bg-panel-surface group cursor-pointer hover:bg-gray-800/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] text-eve-emerald">STAMP // 2026-01-24</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-eve-emerald rounded-full animate-pulse" />
                    <span className="uppercase text-[8px] font-black tracking-widest text-eve-emerald">LATEST_SIGNAL</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Tactical Reorganization Phase III</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-2xl">
                  Platform architecture successfully transitioned to a three-tier deployment model. Isolated core intelligence from public-facing assets while maintaining high-fidelity synchronization through the management bridge.
                </p>
                <div className="flex items-center text-eve-emerald text-[9px] font-black tracking-widest">
                  DECRYPT_LOG <ChevronRight className="ml-1 w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER TICKER (Doctrine V.3) */}
      <footer className="h-12 border-t border-gray-800/50 bg-primary-sidebar/80 backdrop-blur-sm shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-gray-600">
          <div className="flex items-center space-x-6">
            <span>&copy; 2026 EVE_UNIFIED_INTELLIGENCE</span>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-eve-emerald rounded-full" />
              <span>TERMINAL_READY</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY.PROTOCOL</span>
            <span className="hover:text-white transition-colors cursor-pointer">EULA.COMPLIANCE</span>
            <span>CCP_GAMES // EVE_ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App