import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Provider from '@/app/lib/Provider'
import MainComponent from '@/components/MainComponent'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Mini Blog',
  description: 'Mini Blog App',
}
export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Provider>
          <MainComponent>
            {children}
          </MainComponent>
        </Provider>
      </body>
    </html>
  )
}
