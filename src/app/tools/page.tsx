import SectionHeading from '@/components/ui/SectionHeading'

export default function ToolsPage() {
  return (
    <section className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Interactive"
          title="Tools"
          subtitle="Interactive tools and experiments — coming soon."
        />
        <div className="bg-dark-800 border-2 border-dashed border-dark-600 rounded-xl p-16 text-center">
          <p className="text-yellow-400 font-black text-2xl mb-4">Coming Soon</p>
          <p className="text-gray-300">
            Interactive engineering tools powered by AI. Check back later.
          </p>
        </div>
      </div>
    </section>
  )
}
