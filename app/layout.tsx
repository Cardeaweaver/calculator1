import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Cardeá's Box-O-Math",
  description: 'A cool calculator app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
