import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed z-50 flex h-20 w-screen flex-none flex-row content-center items-center bg-cyan-600 p-2 shadow-md shadow-black outline-1">
        <div className="flex h-15 w-40 items-center justify-start">
          <Link
            href={''}
            className="w-25 content-center rounded-xl p-2 text-center hover:bg-cyan-500"
          >
            Menu-Placeholder
          </Link>
        </div>
        <div className="flex h-15 grow content-center items-center justify-center">
          <p>NAV MENU HERE</p>
        </div>
        <div className="flex h-15 w-40 justify-end">
          <Link
            href={''}
            className="w-25 content-center rounded-xl p-2 text-center hover:bg-cyan-500"
          >
            Sign out
          </Link>
        </div>
      </div>
      <div className="grow pt-20 outline-5">{children}</div>
    </div>
  )
}
