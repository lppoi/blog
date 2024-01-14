import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "lzy's blog",
  description: "lzy's blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hans">
      <body className={inter.className}>
        <div className="max-w-4xl mx-auto pt-10 px-4">
          <header>
            <div className="flex items-center justify-between">
              <nav className="ml-auto text-sm font-medium space-x-6">
                <Link href="/">Home</Link>
                <Link href="/blogs">Blog</Link>
              </nav>
            </div>
          </header>
          <main className='body__main py-12'>
            {children}
          </main>
          <footer className='body__footer'>
            <small>&copy; Copyright 2023 - 2024 <a target="_blank"
              href="https://beian.miit.gov.cn/">豫ICP备2023035814号-1</a>
            </small>
          </footer>
        </div>
      </body>
    </html>
  )
}
