interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export default function YouTubeEmbed({ videoId, title = 'YouTube Video' }: YouTubeEmbedProps) {
  if (videoId === 'PLACEHOLDER') {
    return (
      <div className="aspect-video bg-dark-800 border-2 border-dashed border-dark-600 rounded-xl flex items-center justify-center">
        <p className="text-gray-500 text-lg font-semibold">Video coming soon</p>
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-yellow-400/10">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
