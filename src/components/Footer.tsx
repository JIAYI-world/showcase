export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Demo Showcase. Built with React + Vite + Tailwind CSS.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/JIAYI-world"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
          >
            联系我
          </a>
        </div>
      </div>
    </footer>
  )
}
