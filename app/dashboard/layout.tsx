import NavigationBar from '../ui/navigation-bar'

export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <NavigationBar />
      <div>
        <main className="flex min-h-screen bg-radial-[at_15%_25%] from-cyan-700 from-5% to-mist-900 to-95% pt-20">
          <div className="grow">{children}</div>
          <div>{modal}</div>
        </main>
      </div>
    </div>
  )
}
