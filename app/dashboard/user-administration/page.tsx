import { UserAdminSkeleton } from '@/app/ui/skeletons'
import UsersList from '@/app/ui/users'
import clsx from 'clsx'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Page() {
  return (
    <>
      <div className="w-fit outline">
        <h2 className="text-lg">Testing user database, list users here</h2>
        <Suspense fallback={<UserAdminSkeleton />}>
          <UsersList />
        </Suspense>
        <div className="mx-2 flex flex-row justify-items-end outline">
          <Link
            href="/dashboard/user-administration/delete-user"
            className={clsx(
              'm-1 flex h-10 w-fit items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
            )}
          >
            Delete users
          </Link>
          <Link
            href="/dashboard/user-administration/add-user"
            className={clsx(
              'm-1 flex h-10 w-fit items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
            )}
          >
            Add users
          </Link>
        </div>
      </div>
    </>
  )
}
