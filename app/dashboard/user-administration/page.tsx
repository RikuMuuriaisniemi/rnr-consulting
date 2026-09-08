import AddUser from '@/app/ui/add-user'
import UsersList from '@/app/ui/users'
export default async function Dashboard() {
  return (
    <>
      <div>
        <h1>This is the user administration site of the R&R Dashboard page</h1>
        <UsersList />
        <AddUser />
      </div>
    </>
  )
}
