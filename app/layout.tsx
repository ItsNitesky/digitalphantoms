import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Phantoms',
  description: 'Portfolio & Resume Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-phantom-black text-white min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 