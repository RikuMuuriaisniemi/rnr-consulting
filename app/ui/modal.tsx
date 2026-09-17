'use client'

import { useRouter } from 'next/navigation'

export function Modal({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-black/70">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-cyan-600/60 p-2 backdrop-blur-lg">
        <div className="mb-2 flex h-fit flex-row rounded-md bg-cyan-600 shadow-sm shadow-black">
          <button
            className="m-1 h-8 rounded-md bg-blue-400 px-2 text-sm text-white"
            onClick={() => {
              router.back()
            }}
          >
            Close modal
          </button>
          <h1 className="w-fit place-content-center content-center justify-self-center px-2 text-center text-white">
            {title}
          </h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}
