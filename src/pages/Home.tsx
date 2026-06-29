import { useState } from 'react'
import DemoCard from '../components/DemoCard'
import { demos } from '../data/demos'

export default function Home() {
  const [showResume, setShowResume] = useState(false)

  const base = window.location.hostname === 'localhost' ? '/' : '/showcase/'

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
            2027 届校招求职者 | 专注于 AI + 软件工程
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
            <button
              onClick={() => setShowResume(true)}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              联系我
            </button>
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

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowResume(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-[90vw] h-[90vh] max-w-4xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">个人简历</h3>
              <div className="flex items-center gap-3">
                <a
                  href={`${base}resume.pdf`}
                  download="JIAYI_简历.pdf"
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  下载简历
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={`${base}resume.pdf`}
              className="w-full h-[calc(100%-73px)] border-0"
              title="简历"
            />
          </div>
        </div>
      )}
    </div>
  )
}
