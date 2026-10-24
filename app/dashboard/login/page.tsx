import Login from '@/app/ui/dashboard/login'

export default function Page() {
  return (
    <div className="fixed top-1/2 left-1/2 flex h-[75vh] w-[45vw] -translate-x-1/2 -translate-y-1/2 columns-2 place-content-center content-center items-center rounded-xl bg-gray-500/20 shadow-md shadow-black backdrop-blur-xl">
      <Login />
    </div>
  )
}
