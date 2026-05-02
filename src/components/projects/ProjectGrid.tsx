'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import type { Project } from '@/lib/types'

type Category = 'All' | 'Maker' | 'Mechanical' | 'Electronics' | 'Software' | 'Research'

const CATEGORIES: Category[] = ['All', 'Maker', 'Mechanical', 'Electronics', 'Software', 'Research']

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
              active === cat
                ? 'bg-yellow-400 text-dark-950'
                : 'bg-dark-800 text-gray-300 border border-dark-600 hover:border-yellow-400 hover:text-yellow-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
