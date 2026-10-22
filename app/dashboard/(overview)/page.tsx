'use client'

import { Card } from '@/app/ui/card'
import Link from 'next/link'
import clsx from 'clsx'
import Signup from '@/app/ui/dashboard/signup'
import { usePathname } from 'next/navigation'
import { authClient } from '@/app/lib/auth-client'
import { Button } from '@/app/ui/button'

export default function Page() {
  const pathname = usePathname()

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession()

  return (
    <>
      <div className="flex place-content-center">
        <h1>Hey, {session?.user.name}! </h1> <br />
        <h1>
          You current email is {session?.user.email} and role is
          {session?.user.role}
        </h1>
        <p>List rest of the session data: {isPending}</p>
      </div>
      <div className="flex flex-row place-content-center">
        <Card title="Testi" value={420}></Card>
        <Card title="Testi 2 todella pitkä teksti kokeilu" value={20}></Card>
      </div>
      <div>
        <Link
          href="/dashboard/signup"
          className="m-1 flex h-10 w-fit items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          {clsx('Sign ', { in: session, up: !session })}
        </Link>
        <Button
          onClick={async () => {
            const { error } = await authClient.signOut()
          }}
        >
          Sign out
        </Button>
      </div>
    </>
  )
}
