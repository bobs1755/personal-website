import { EmailIcon, LinkedInIcon, GoogleScholarIcon, YouTubeIcon } from '@/components/icons'

const socialLinks = [
  { href: 'mailto:bseif4email@gmail.com', Icon: EmailIcon, label: 'Email' },
  { href: 'https://www.linkedin.com/in/robert-seif/', Icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'https://scholar.google.com/citations?hl=en&user=X6RaYMUAAAAJ', Icon: GoogleScholarIcon, label: 'Google Scholar' },
  { href: 'https://www.youtube.com/@Bobby_Plus', Icon: YouTubeIcon, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-600 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <p className="text-gray-300 text-sm text-center">Engineer. Maker. Builder.</p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Bob. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
