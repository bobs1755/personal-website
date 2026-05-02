import SectionHeading from '@/components/ui/SectionHeading'
import { EmailIcon, LinkedInIcon, GoogleScholarIcon, YouTubeIcon } from '@/components/icons'

const contactCards = [
  {
    platform: 'Email',
    handle: 'bseif4email@gmail.com',
    href: 'mailto:bseif4email@gmail.com',
    Icon: EmailIcon,
  },
  {
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/robertseif',
    href: 'https://linkedin.com/in/robertseif',
    Icon: LinkedInIcon,
  },
  {
    platform: 'Google Scholar',
    handle: 'Robert Seif',
    href: 'https://scholar.google.com',
    Icon: GoogleScholarIcon,
  },
  {
    platform: 'YouTube',
    handle: '@Bobby_Plus',
    href: 'https://www.youtube.com/@Bobby_Plus',
    Icon: YouTubeIcon,
  },
]

export default function ContactPage() {
  return (
    <section className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Connect"
          title="Let&apos;s Connect"
          subtitle="Whether you're a fellow engineer, a researcher, or just curious about something I've built — reach out."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactCards.map(({ platform, handle, href, Icon }) => (
            <a
              key={platform}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-dark-800 hover:bg-dark-700 border border-dark-600 hover:border-yellow-400 p-8 rounded-xl flex flex-col items-center gap-4 transition-all duration-300 group"
            >
              <Icon className="w-10 h-10 text-yellow-400" />
              <div className="text-center">
                <p className="text-lg font-black text-gray-100 group-hover:text-yellow-400 transition-colors">
                  {platform}
                </p>
                <p className="text-sm text-gray-300 mt-1">{handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
