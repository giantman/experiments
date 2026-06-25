import { Link } from 'react-router-dom'
import { caseStudies } from '../data'

export default function Work() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="border-b border-[#2c2420]/20 px-4 py-3">
        <p className="text-[11px] font-mono text-[#2c2420]">Selected Work &amp; Projects</p>
      </div>

      <div className="divide-y divide-[#2c2420]/20">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            to={`/work/${study.id}`}
            className="group grid grid-cols-[1fr_1fr_2fr] gap-4 px-4 py-6 hover:opacity-60 transition-opacity"
          >
            <div>
              <p className="text-[11px] font-mono text-[#2c2420]">Name: {study.title}</p>
            </div>
            <div>
              {Object.entries(study.metadata).slice(0, 2).map(([key, val]) => (
                <p key={key} className="text-[11px] font-mono text-[#2c2420]/60 leading-relaxed">
                  {key}: {val}
                </p>
              ))}
            </div>
            <div>
              <p className="text-base text-[#2c2420] leading-snug">{study.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
