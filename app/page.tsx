import Image from "next/image";
import gnome from "@/public/GNOME.png";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen place-content-center bg-radial-[at_15%_25%] from-cyan-700 from-5% to-gray-900 to-95% p-8">
        <div className="columns-2 w-[75vw] h-[75vh] flex place-content-center items-center rounded-xl bg-gray-500/20 backdrop-blur-xl shadow-md shadow-black">
          <div className=" place-content-center p-2">
            <p className="underline text-2xl text-center">
              Welcome to the R&R Home page!
            </p>
            <p className="text-center">Isoi juttui tulos (vai tuleeko...?)</p>
          </div>
          <div className="relative w-58 h-70">
            <Image src={gnome} fill alt="Picture of meme gnome" />
          </div>
        </div>
      </main>
    </div>
  );
}
