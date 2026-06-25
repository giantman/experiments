import { experiments } from '../data'

export default function Experiments() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="border-b border-[#2c2420]/20 px-4 py-3">
        <p className="text-[11px] font-mono text-[#2c2420]">Visual Experiments</p>
      </div>

      <div className="divide-y divide-[#2c2420]/20">
        {experiments.map((exp) => (
          <div
            key={exp.id}
            className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-4 py-6"
          >
            <div>
              <p className="text-[11px] font-mono text-[#2c2420]">Name: {exp.title}</p>
            </div>
            <div>
              {Object.entries(exp.metadata).map(([key, val]) => (
                <p key={key} className="text-[11px] font-mono text-[#2c2420]/60 leading-relaxed">
                  {key}: {val}
                </p>
              ))}
            </div>
            <div>
              {/* Canvas/experiment embed goes here */}
              <div
                className="w-full aspect-[16/9] relative"
                style={{
                  backgroundColor: '#e8e3de',
                  backgroundImage: `
                    linear-gradient(rgba(44,36,32,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(44,36,32,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '48px 48px',
                }}
              >
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#2c2420]/40 uppercase tracking-wide">
                  Experiment Preview
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
