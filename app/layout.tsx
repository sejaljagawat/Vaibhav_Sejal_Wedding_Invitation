import type { Metadata } from 'next'
import { Cormorant_Garamond, Great_Vibes, Tenor_Sans, Pinyon_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script"
});

const tenorSans = Tenor_Sans({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans"
});

const pinyonScript = Pinyon_Script({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon"
});

export const metadata: Metadata = {
  title: 'Vaibhav & Sejal — A Sacred Union',
  description: 'Join us in celebrating the wedding of Vaibhav and Sejal',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable} ${tenorSans.variable} ${pinyonScript.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
