import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data'

function ImagePlaceholder() {
  return <div className="w-full h-full bg-[#D0CECC]" />
}

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center px-8">
        <div>
          <p className="text-sm text-[#1a1917]/50 mb-4">Not found.</p>
          <Link to="/work" className="text-sm text-[#1a1917] underline underline-offset-2">
            ← Work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-[72px]">
      {/* Header */}
      <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-8 pt-6 pb-5 border-b border-[#1a1917]/10">
        <p className="text-sm text-[#1a1917]">{study.title}</p>
        <p className="text-sm text-[#1a1917]/40">{study.tags.join(', ')}</p>
        <div className="text-sm text-[#1a1917]/40 leading-snug">
          {Object.entries(study.metadata).map(([, v]) => (
            <span key={v} className="mr-4">{v}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[1fr_2.5fr_1fr] gap-4 px-8 py-10 items-start">
        <div className="text-sm text-[#1a1917] leading-[1.55]">
          <p className="font-medium mb-3">{study.shortDescription}</p>
          {study.description.map((para, i) => (
            <p key={i} className="mb-3 text-[#1a1917]/70">{para}</p>
          ))}
        </div>

        <div className="aspect-[4/3]">
          <ImagePlaceholder />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <div className="aspect-square"><ImagePlaceholder /></div>
            <p className="text-xs text-[#1a1917]/40 mt-1.5">Figure 1</p>
          </div>
          <div>
            <div className="aspect-square"><ImagePlaceholder /></div>
            <p className="text-xs text-[#1a1917]/40 mt-1.5">Figure 2</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1917]/10 mx-8 py-5">
        <Link to="/work" className="text-sm text-[#1a1917] hover:opacity-50 transition-opacity">
          ← Work
        </Link>
      </div>
    </main>
  )
}
