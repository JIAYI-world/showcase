import { Link } from 'react-router-dom'
import type { Demo } from '../data/demos'

interface DemoCardProps {
  demo: Demo
}

export default function DemoCard({ demo }: DemoCardProps) {
  return (
    <Link
      to={`/demo/${demo.id}`}
      className="group block rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={demo.coverImage}
          alt={demo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {demo.demoUrl && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
            Live Demo
          </div>
        )}
        {!demo.demoUrl && demo.videoUrl && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
            演示视频
          </div>
        )}
      </div>
      <div className="p-5 bg-transparent">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {demo.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {demo.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {demo.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
