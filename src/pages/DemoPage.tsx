import { useParams, Link } from 'react-router-dom'
import { useRef } from 'react'
import { demos } from '../data/demos'

export default function DemoPage() {
  const { id } = useParams<{ id: string }>()
  const demo = demos.find((d) => d.id === id)
  const demoRef = useRef<HTMLDivElement>(null)

  const handleFullscreen = () => {
    if (demoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        demoRef.current.requestFullscreen()
      }
    }
  }

  if (!demo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-6">未找到该 Demo</p>
          <Link
            to="/"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回所有项目
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Project Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{demo.title}</h1>
              <p className="mt-3 text-gray-600">{demo.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {demo.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Role */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">我的角色</h3>
              <p className="text-gray-900">{demo.role}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {demo.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">功能亮点</h3>
              <ul className="space-y-2">
                {demo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {demo.githubUrl && (
                <a
                  href={demo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  GitHub 源码
                </a>
              )}
            </div>

            {/* Demo Password */}
            {demo.demoPassword && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-amber-800 mb-1">🔐 访问密码</h3>
                <code className="text-lg font-mono text-amber-900 bg-amber-100 px-3 py-1 rounded">
                  {demo.demoPassword}
                </code>
              </div>
            )}
          </div>

          {/* Right: Demo Area */}
          <div className="lg:col-span-2" ref={demoRef}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {demo.title} - {demo.demoUrl ? '交互演示' : '演示视频'}
                  </span>
                </div>
                <button
                  onClick={handleFullscreen}
                  className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors"
                  title="全屏"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              {demo.demoUrl ? (
                <iframe
                  src={demo.demoUrl}
                  className="w-full h-[calc(100%-48px)] min-h-[600px] border-0"
                  title={demo.title}
                />
              ) : demo.videoUrl ? (
                <div className="w-full">
                  {demo.videoUrl.endsWith('.mp4') || demo.videoUrl.endsWith('.webm') ? (
                    <video
                      src={demo.videoUrl}
                      controls
                      className="w-full"
                      preload="metadata"
                    >
                      您的浏览器不支持视频播放
                    </video>
                  ) : (
                    <iframe
                      src={demo.videoUrl}
                      className="w-full aspect-video border-0"
                      title={demo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              ) : (
                <div className="w-full h-[calc(100%-48px)] min-h-[600px] flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <img
                      src={demo.coverImage}
                      alt={demo.title}
                      className="max-w-md mx-auto rounded-lg shadow-sm mb-4"
                    />
                    <p className="text-gray-500 text-sm">
                      演示视频准备中，请访问 GitHub 查看源码
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
