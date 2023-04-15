import Image from 'next/image'
import { Inter } from 'next/font/google';
import variables from '../styles/varaiables.module.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="primary-background  text-2xl font-bold min-h-screen">
       <h1>Hello World</h1>
    </main>
  )
}
