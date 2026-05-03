import Tag from '@/components/ui/Tag'
import type { Project } from '@/lib/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-dark-800 border border-dark-600 hover:border-yellow-400 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="aspect-video bg-dark-700 relative overflow-hidden">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-yellow-400 font-black text-5xl opacity-20 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-3">
          {project.categories.map((cat) => (
            <span key={cat} className="text-xs font-mono text-yellow-400 uppercase tracking-widest bg-dark-700 px-2 py-1 rounded border border-dark-600">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-black text-gray-100 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 flex-1 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}
