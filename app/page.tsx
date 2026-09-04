import Image from "next/image";
import Link from "next/link";
import gnome from "@/public/GNOME.png";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen place-content-center bg-radial-[at_15%_25%] from-cyan-700 from-5% to-gray-900 to-95% p-8">
        <div className="columns-2 w-[70vw] h-[70vh] flex place-content-center content-center items-center rounded-xl bg-gray-500/20 backdrop-blur-xl shadow-md shadow-black">
          <div className="flex w-md content-between items-center flex-col p-3">
            <p className="underline text-2xl text-center m-1">
              Welcome to the R&R Home page!
            </p>
            <p className="text-center m-2">
              Isoi juttui tulos (vai tuleeko...?)
            </p>
            <Link
              key="Dashboard"
              href="/dashboard"
              className="flex h-[40px] w-[150px] items-center justify-center rounded-md text-md m-2 bg-gray-500/50 backdrop-blur-xl shadow-md shadow-black font-medium hover:bg-gray-500/90"
            >
              Find out
            </Link>
          </div>
          <div className="relative w-58 h-70">
            <Image
              src={gnome}
              fill
              alt="Picture of meme gnome"
              sizes="(max-width: 860px) 100vw, (max-width: 1049px) 50vw, 33vw"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
