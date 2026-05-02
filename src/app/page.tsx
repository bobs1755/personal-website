import Hero from '@/components/home/Hero'
import AboutSnippet from '@/components/home/AboutSnippet'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/projects/ProjectCard'
import Button from '@/components/ui/Button'
import { YouTubeIcon, GoogleScholarIcon } from '@/components/icons'
import { projects } from '@/data/projects'

const featuredProjects = projects.filter((p) => p.featured)

const quickLinks = [
  {
    title: 'Published Research',
    desc: 'Multi-fidelity T&E for AI-enabled systems',
    href: '/research',
    Icon: GoogleScholarIcon,
  },
  {
    title: 'TEDx Talk',
    desc: 'Watch the full presentation on YouTube',
    href: '/tedx',
    Icon: YouTubeIcon,
  },
  {
    title: 'YouTube Channel',
    desc: 'Project builds and more at @Bobby_Plus',
    href: 'https://www.youtube.com/@Bobby_Plus',
    Icon: YouTubeIcon,
    external: true,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />

      <section className="py-20 bg-dark-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            subtitle="A cross-section of engineering, software, and making."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Button href="/projects" variant="ghost">
              See All Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Explore" title="More From Bob" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map(({ title, desc, href, Icon, external }) => (
              <a
                key={title}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="block bg-dark-800 border-2 border-dark-600 hover:border-yellow-400 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Icon className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-black text-gray-100 mb-2 group-hover:text-yellow-400 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
