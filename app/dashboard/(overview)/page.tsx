'use client'

import { Card } from '@/app/ui/card'
import Link from 'next/link'
import clsx from 'clsx'
import Signup from '@/app/ui/dashboard/signup'
import { usePathname } from 'next/navigation'
import { authClient } from '@/app/lib/auth-client'
import { Button } from '@/app/ui/button'

export default function Page() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession()

  return (
    <>
      <div className="flex flex-row place-content-center">
        {session && (
          <Card
            title={'Welcome, ' + session.user.name}
            data={{
              email: session.user.email,
              role: session.user.role?.toString(),
            }}
          />
        )}
      </div>
    </>
  )
}
