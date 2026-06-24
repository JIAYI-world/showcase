import DemoCard from '../components/DemoCard'
import { demos } from '../data/demos'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-4xl text-white font-bold">J</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            你好，我是 JIAYI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            2026 届校招求职者 | 专注于 AI + 软件工程
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/JIAYI-world"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              GitHub 主页
            </a>
            <a
              href="mailto:your-email@example.com"
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              联系我
            </a>
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">项目展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </section>
    </div>
  )
}
