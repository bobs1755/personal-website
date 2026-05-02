import SectionHeading from '@/components/ui/SectionHeading'
import ProjectGrid from '@/components/projects/ProjectGrid'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="All Projects"
          subtitle="Engineering, electronics, software, and making — the full collection."
        />
        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}
