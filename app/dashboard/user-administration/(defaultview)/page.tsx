import AddUser from '@/app/ui/add-user'
import UsersList from '@/app/ui/users'
import Link from 'next/link'
export default async function Dashboard() {
  return (
    <>
      <div>
        <h2 className="m-2">Testing user database, list users here</h2>
        <UsersList />
        <AddUser />
        <Link href="/dashboard/user-administration/delete-user">
          Open modal
        </Link>
      </div>
    </>
  )
}
