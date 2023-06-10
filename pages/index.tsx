import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="bg-red-700 text-white p-4">
          <h1 className="text-2xl font-bold">Major Service Downtime</h1>
          <p className="text-lg">
            We are currently in the process of reworking our services with our new Identity Service Provider, which has resulted in multiple services and endpoints being temporarily offline.
          </p>
          <p className="text-lg">
            Additionally, we are experiencing higher loads on multiple services due to the Furality Stream Tool and the processing of photos and videos from Furality.
          </p>
        </div>
        <div className="h-full" style={{ background: 'url(/bg.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='flex items-center h-full justify-center bg-black bg-opacity-60'>
            <div><h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">WELCOME</span> TO LYNIX.CA</h1>
              <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-white font-bold text-center">I am delighted to make your acquaintance! Explore a few of my pages to gain deeper insights into my background and achievements.<br />
                Furry enthusiast, and I am currently pursuing a career in the field of information security.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
