import SectionHeading from '@/components/ui/SectionHeading'
import ResearchCard from '@/components/research/ResearchCard'
import Button from '@/components/ui/Button'
import { GoogleScholarIcon } from '@/components/icons'
import { researchPapers } from '@/data/research'

export default function ResearchPage() {
  return (
    <section className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academic Work"
          title="Published Research"
          subtitle="Focused on testing and evaluation of AI-enabled systems for DoD acquisition programs."
        />
        <div className="flex flex-col gap-8 mb-16">
          {researchPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>
        <div className="border-t border-dark-600 pt-12 flex flex-wrap gap-4 justify-center">
          <Button href="https://scholar.google.com/citations?hl=en&user=X6RaYMUAAAAJ" variant="ghost">
            <GoogleScholarIcon className="w-5 h-5" />
            Google Scholar
          </Button>
          <Button href="https://www.researchgate.net" variant="ghost">
            ResearchGate
          </Button>
        </div>
      </div>
    </section>
  )
}
