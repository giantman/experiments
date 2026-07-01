import { Link } from 'react-router-dom'
import starIcon from '../assets/star.svg'
import { caseStudies } from '../data'
import type { CaseStudy } from '../data'

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function LeftCard({ study }: { study: CaseStudy }) {
  return (
    <Link to={`/work/${study.id}`} className="group block border-r border-[#1a1917]/10">
      <div className="aspect-[4/3] overflow-hidden">
        <div className="w-full h-full bg-[#C8C6C3] group-hover:brightness-95 transition-all duration-300" />
      </div>
      <div className="px-8 py-4 flex items-baseline justify-between">
        <p className="text-sm text-[#1a1917]">{study.title}</p>
        <p className="text-xs text-[#1a1917]/40">{study.tags[0]}</p>
      </div>
    </Link>
  )
}

function RightCard({ study }: { study: CaseStudy }) {
  return (
    <Link to={`/work/${study.id}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
        <img
          src={starIcon}
          alt=""
          width={28}
          height={28}
          className="opacity-15 group-hover:opacity-25 transition-opacity"
        />
      </div>
      <div className="px-8 py-4 flex items-baseline justify-between">
        <p className="text-sm text-[#1a1917]">{study.title}</p>
        <p className="text-xs text-[#1a1917]/40">{study.tags[0]}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  const rows = chunk(caseStudies, 2)

  return (
    <main>
      {/* Hero */}
      <div className="grid grid-cols-2" style={{ height: 'calc(56vh - 72px)', marginTop: '72px' }}>
        <div className="flex flex-col justify-end px-8 pb-10">
          <div className="grid grid-cols-2 gap-6">
            <p className="text-sm text-[#1a1917] leading-snug">
              Onsite/Offsite is the design practice of Robert Manukyan, designer and design leader based in Los Angeles, CA.
            </p>
            <p className="text-sm text-[#1a1917] leading-snug">
              Multi-disciplinary designer with a focus on AI Product design, design engineering, brand/identity, and visual design.
            </p>
          </div>
        </div>
        <div className="bg-[#C8C6C3] flex items-center justify-center">
          <img src={starIcon} alt="" width={24} height={24} className="opacity-30" />
        </div>
      </div>

      {/* Brand heading */}
      <div className="bg-white px-8 py-3 border-t border-b border-[#1a1917]/8">
        <h1
          className="text-[#000000] leading-none tracking-tight"
          style={{ fontFamily: "'Plantin MT Pro', Georgia, serif", fontWeight: 300, fontSize: 'clamp(48px, 11vw, 168px)' }}
        >
          Onsite/Offsite
        </h1>
      </div>

      {/* Projects grid — pairs of 2 per row */}
      <div>
        {rows.map((pair, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-2 border-b border-[#1a1917]/10">
            <LeftCard study={pair[0]} />
            {pair[1] ? (
              <RightCard study={pair[1]} />
            ) : (
              <div className="aspect-[4/3] bg-[#eeeeee]" />
            )}
          </div>
        ))}
      </div>

      <div className="h-20" />
    </main>
  )
}
