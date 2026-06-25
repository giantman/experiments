import { Link } from 'react-router-dom'
import { caseStudies, experiments } from '../data'

export default function Home() {
  return (
    <main>
      {/* Hero — full viewport, centered display type */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <h1
          className="font-display font-black leading-[0.91] tracking-[-0.02em] text-[#2c2420]"
          style={{ fontSize: 'clamp(52px, 9.5vw, 140px)' }}
        >
          Work &amp;<br />
          Visual<br />
          Experiments<br />
          in Design<br />
          &amp; Code,<br />
          2024&nbsp;&ndash;&nbsp;&#8734;
        </h1>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2c2420]/20" />

      {/* Two-column listing */}
      <section className="grid grid-cols-2 divide-x divide-[#2c2420]/20">
        {/* Left: Case Studies */}
        <div className="px-4 pt-6 pb-16">
          <p className="text-[11px] font-mono font-bold mb-8 text-[#2c2420]">
            Selected Work &amp; Projects
          </p>
          <div className="divide-y divide-[#2c2420]/15">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/work/${study.id}`}
                className="group flex items-baseline justify-between gap-8 py-5 hover:opacity-60 transition-opacity"
              >
                <div>
                  <p className="text-base leading-snug text-[#2c2420] mb-1">{study.title}</p>
                  <p className="text-sm text-[#2c2420]/60 leading-relaxed">{study.shortDescription}</p>
                </div>
                <span className="text-[11px] font-mono text-[#2c2420]/50 shrink-0">{study.year}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Experiments */}
        <div className="px-4 pt-6 pb-16">
          <p className="text-[11px] font-mono font-bold mb-8 text-[#2c2420]">
            Visual Experiments
          </p>
          <div className="divide-y divide-[#2c2420]/15">
            {experiments.map((exp) => (
              <Link
                key={exp.id}
                to={`/experiments/${exp.id}`}
                className="group flex items-baseline justify-between gap-8 py-5 hover:opacity-60 transition-opacity"
              >
                <div>
                  <p className="text-base leading-snug text-[#2c2420] mb-1">{exp.title}</p>
                  <p className="text-sm text-[#2c2420]/60 leading-relaxed">{exp.shortDescription}</p>
                </div>
                <span className="text-[11px] font-mono text-[#2c2420]/50 shrink-0">{exp.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
