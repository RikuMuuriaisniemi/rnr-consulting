import AddUser from '@/app/ui/add-user'
import { Button } from '@/app/ui/button'
import UsersList from '@/app/ui/users'
import clsx from 'clsx'
import Link from 'next/link'

export default async function Dashboard() {
  return (
    <>
      <div>
        <h2 className="m-2">Testing user database, list users here</h2>
        <UsersList />
        <Link
          href="/dashboard/user-administration/delete-user"
          className={clsx(
            'm-2 flex h-10 w-fit items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium text-white shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
          )}
        >
          Delete users
        </Link>
        <Link
          href="/dashboard/user-administration/add-user"
          className={clsx(
            'm-2 flex h-10 w-fit items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium text-white shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
          )}
        >
          Add users
        </Link>
      </div>
    </>
  )
}
