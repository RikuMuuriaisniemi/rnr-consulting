import Image from 'next/image'
import Link from 'next/link'
import gnome from '@/public/GNOME.png'

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen place-content-center bg-radial-[at_15%_25%] from-cyan-700 from-5% to-gray-900 to-95% p-8">
        <div className="flex h-[70vh] w-[70vw] columns-2 place-content-center content-center items-center rounded-xl bg-gray-500/20 shadow-md shadow-black backdrop-blur-xl">
          <div className="flex w-md flex-col content-between items-center p-3">
            <p className="m-1 text-center text-2xl underline">
              Welcome to the R&R Home page!
            </p>
            <p className="m-2 text-center">
              Isoi juttui tulos (vai tuleeko...?)
            </p>
            <Link
              key="Dashboard"
              href="/dashboard"
              className="text-md m-2 flex h-10 w-37.5 items-center justify-center rounded-md bg-gray-500/50 font-medium shadow-md shadow-black backdrop-blur-xl hover:bg-gray-500/90"
            >
              Find out
            </Link>
          </div>
          <div className="relative h-70 w-58">
            <Image
              src={gnome}
              fill
              alt="Picture of meme gnome"
              loading="eager"
              sizes="(max-width: 860px) 100vw, (max-width: 1049px) 50vw, 33vw"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
