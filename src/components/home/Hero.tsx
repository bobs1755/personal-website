import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-dark-950">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <p className="text-yellow-400 font-mono text-base mb-4 tracking-widest uppercase">
          Hi, I&apos;m
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 leading-none mb-4">
          Bob Seif.
        </h1>
        <div className="flex flex-col sm:flex-row sm:gap-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-400 mb-8 leading-tight">
          <span>ENGINEER.</span>
          <span>MAKER.</span>
          <span>BUILDER.</span>
        </div>
        <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
          Mechanical engineer, AI researcher, and TEDx speaker passionate about building things that matter.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/projects" variant="primary">
            See My Work
          </Button>
          <Button href="/contact" variant="ghost">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
