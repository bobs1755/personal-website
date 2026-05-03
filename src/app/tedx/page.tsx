import SectionHeading from '@/components/ui/SectionHeading'
import YouTubeEmbed from '@/components/tedx/YouTubeEmbed'

export default function TedxPage() {
  return (
    <section className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Live Talk"
          title="TEDx Talk"
          subtitle="Watch the full presentation below."
        />
        <YouTubeEmbed videoId="Me1nJDbXWuU" title="TEDx Talk" />
      </div>
    </section>
  )
}
