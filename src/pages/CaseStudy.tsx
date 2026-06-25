import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data'

function ImagePlaceholder() {
  return (
    <div
      className="relative w-full aspect-[4/3]"
      style={{
        backgroundColor: '#e8e3de',
        backgroundImage: `
          linear-gradient(rgba(44,36,32,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(44,36,32,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
      }}
    >
      <span className="absolute bottom-3 left-3 text-[9px] font-mono text-[#2c2420]/40 leading-tight uppercase tracking-wide">
        Rectangular<br />
        Placeholder<br />
        Image
      </span>
    </div>
  )
}

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <main className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-[#2c2420]/50 font-mono mb-4">Not found.</p>
          <Link to="/" className="text-[11px] font-mono text-[#2c2420] underline underline-offset-4">
            ← Back
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Metadata + Description */}
      <section className="pt-16 pb-0">
        <div className="grid grid-cols-[1fr_1fr_2fr] gap-0 px-4 py-10">
          {/* Col 1: Project name */}
          <div>
            <p className="text-[11px] font-mono text-[#2c2420]">Name: {study.title}</p>
          </div>

          {/* Col 2: Metadata key-values */}
          <div>
            {Object.entries(study.metadata).map(([key, val]) => (
              <p key={key} className="text-[11px] font-mono text-[#2c2420] leading-relaxed">
                {key}: {val}
              </p>
            ))}
          </div>

          {/* Col 3: Description */}
          <div className="max-w-xl">
            {study.description.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-[#2c2420] mb-4"
                style={{ textIndent: i > 0 ? '2em' : undefined }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Image Placeholders */}
      <section className="grid grid-cols-2 gap-0">
        <ImagePlaceholder />
        <ImagePlaceholder />
      </section>

      {/* Back link */}
      <div className="border-t border-[#2c2420]/20 px-4 py-5">
        <Link to="/" className="text-[11px] font-mono text-[#2c2420] hover:opacity-50 transition-opacity">
          ← Back
        </Link>
      </div>
    </main>
  )
}
