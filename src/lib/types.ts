export interface Project {
  id: string
  title: string
  categories: Array<'Maker' | 'Mechanical' | 'Electronics' | 'Software' | 'Research'>
  description: string
  tags: string[]
  imageSrc?: string
  imageAlt: string
  links?: {
    github?: string
    demo?: string
    paper?: string
  }
  featured: boolean
}

export interface ResearchPaper {
  id: string
  title: string
  venue: string
  year: number
  authors: string
  abstract: string
  doi?: string
  pdfUrl?: string
  figshareUrl?: string
  thumbnailSrc?: string
}
