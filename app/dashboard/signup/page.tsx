import Signup from '@/app/ui/dashboard/signup'

export default function Page() {
  return (
    <div className="fixed top-1/2 left-1/2 flex h-3/4 w-1/2 -translate-x-1/2 -translate-y-1/2 columns-2 place-content-center items-center rounded-xl bg-gray-500/20 shadow-md shadow-black backdrop-blur-xl">
      <Signup />
    </div>
  )
}
