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
  title: 'Vaibhav & Sejal Wedding Invite',
  description: 'Join us in the wedding of VS',
  generator: 'v0.app',

  // Browser + device icons
  icons: {
    icon: '/VS_Logo.png',
    apple: '/VS_Logo.png',
  },

  // Social media preview (WhatsApp, Telegram, LinkedIn, etc.)
  openGraph: {
    title: 'Vaibhav & Sejal Wedding Invite',
    description: 'Join us in the wedding of VS',
    images: [
      {
        url: '/VS_Logo.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  // Twitter/X preview
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav & Sejal Wedding Invite',
    description: 'Join us in the wedding of VS',
    images: ['/VS_Logo.png'],
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
