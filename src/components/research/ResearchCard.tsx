import Image from 'next/image'
import Button from '@/components/ui/Button'
import type { ResearchPaper } from '@/lib/types'

export default function ResearchCard({ paper }: { paper: ResearchPaper }) {
  return (
    <div className="bg-dark-800 border border-dark-600 hover:border-yellow-400 rounded-xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row">
      {paper.thumbnailSrc && (
        <div className="md:w-52 aspect-video md:aspect-auto relative flex-shrink-0 bg-dark-700">
          <Image
            src={paper.thumbnailSrc}
            alt={paper.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-yellow-400 uppercase tracking-widest">{paper.venue}</span>
          <span className="text-xs text-gray-500">{paper.year}</span>
        </div>
        <h3 className="text-xl font-black text-gray-100 mb-3 leading-snug">{paper.title}</h3>
        <p className="text-sm text-gray-400 mb-4 italic">{paper.authors}</p>
        <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">{paper.abstract}</p>
        <div className="flex flex-wrap gap-3">
          {paper.figshareUrl && (
            <Button href={paper.figshareUrl} variant="ghost" className="text-sm px-4 py-2">
              View Paper
            </Button>
          )}
          {paper.doi && (
            <Button href={`https://doi.org/${paper.doi}`} variant="ghost" className="text-sm px-4 py-2">
              DOI
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
