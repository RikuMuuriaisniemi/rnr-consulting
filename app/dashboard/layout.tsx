import NavigationBar from '../ui/navigationBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationBar />
      <div>
        <main className="flex min-h-screen place-content-center bg-radial-[at_15%_25%] from-cyan-700 from-5% to-gray-900 to-95% pt-20">
          <div className="grow outline-5">{children}</div>
        </main>
      </div>
    </div>
  )
}
