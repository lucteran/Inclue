import Image from 'next/image'
import { Inter } from 'next/font/google'
import Primary from '@/components/basics/Primary'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
>
      <div>
      <Primary title="Primeiro Componente" content="Seja bem vindo(a)!"  />
      </div>
      
    </main>
  )
}
