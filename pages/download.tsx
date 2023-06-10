import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="h-screen p-5">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Downloads</span>
                </h1>
                <h1 className="text-3xl font-bold text-center mt-5">Download Furality Sylva Photos & Videos</h1>

                <div className="flex flex-col space-y-5 items-center justify-center mt-10">
                    <div className="bg-gray-800 p-5 rounded-lg w-1/4">
                        <p className="font-bold">Filename: furality_sylva_photos.zip</p>
                        <p className="">Size: 1.46GB</p><br/>
                        <a href="/downloads/furality_sylva_photos.zip" className="mt-5 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                            Download
                        </a>
                    </div>
                    <div className="bg-gray-800 p-5 rounded-lg w-1/4">
                        <p className="font-bold">Filename: VAULT_B2_VIDS.zip</p>
                        <p className="">Size: 864.11GB</p><br/>
                        <a href="#show-error-unavailable" className="mt-5 bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Download Unavailable
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
