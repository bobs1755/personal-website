import SectionHeading from '@/components/ui/SectionHeading'
import YouTubeEmbed from '@/components/tedx/YouTubeEmbed'
import Button from '@/components/ui/Button'
import { YouTubeIcon } from '@/components/icons'

export default function TedxPage() {
  return (
    <section className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Live Talk"
          title="TEDx Talk"
          subtitle="Watch the full presentation below."
        />
        <YouTubeEmbed videoId="Me1nJDbXWuU" title="Bob Seif TEDx Talk" />
        <div className="mt-10 bg-dark-800 border border-dark-600 rounded-xl p-8">
          <h3 className="text-xl font-black text-gray-100 mb-6">Key Themes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Engineering', 'Innovation', 'Making'].map((theme) => (
              <div
                key={theme}
                className="bg-dark-700 border border-dark-600 hover:border-yellow-400 rounded-lg p-4 text-center transition-colors"
              >
                <p className="text-yellow-400 font-black text-lg">{theme}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="https://www.youtube.com/@Bobby_Plus" variant="primary">
            <YouTubeIcon className="w-5 h-5" />
            Watch More on YouTube
          </Button>
        </div>
      </div>
    </section>
  )
}
