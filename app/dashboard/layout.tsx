import NavigationBar from '../ui/navigationBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationBar />
      <div className="grow pt-20 outline-5">{children}</div>
    </div>
  )
}
