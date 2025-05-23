import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technical & Scientific Translation Services',
  description: 'Professional technical and scientific translation services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Your Brand</div>
              <div className="space-x-4">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="/references" className="text-gray-700 hover:text-gray-900">References</a>
                <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Your Translation Business. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
