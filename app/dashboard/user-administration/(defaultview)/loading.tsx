import AddUser from '@/app/ui/add-user'
import { UserAdminSkeleton } from '@/app/ui/skeletons'

export default function Loading() {
  return (
    <>
      <div>
        <h2 className="m-2">Testing user database, list users here</h2>
        <UserAdminSkeleton />
        <AddUser />
      </div>
    </>
  )
}
