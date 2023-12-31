import './globals.css'
import { Navbar } from './components/Navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({weight: ["400", "600"], subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
