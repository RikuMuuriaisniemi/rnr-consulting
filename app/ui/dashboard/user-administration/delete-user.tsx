import { deleteUser } from '../../../lib/actions'
import { fetchUsers } from '../../../lib/data'
import { Button } from '../../button'

export default async function DeleteUser() {
  const fetchedUsers = await fetchUsers()

  async function handleDeleteUser(userId: number) {
    console.log('Deleting user..!!')
    deleteUser(userId)
  }

  if (fetchedUsers.total === 0) {
    return <p className="mt-4 text-gray-400">No users available.</p>
  }
  return (
    <div className="table w-2xl border-collapse overflow-hidden rounded-md shadow-md shadow-black">
      <div className="table-header-group border-b-2 border-gray-600">
        <div className="table-row bg-gray-400/50 font-medium">
          <div className="table-cell items-center px-2 py-1">Username</div>
          <div className="table-cell items-center px-2 py-1">
            User's email address
          </div>
          <div className="table-cell items-center px-2 py-1">Delete user</div>
        </div>
      </div>
      <div className="table-row-group divide-y-2 divide-gray-600 bg-gray-500/50 font-medium">
        {fetchedUsers.users.map((user) => {
          const deleteUserWithId = deleteUser.bind(null, Number(user.id))
          return (
            <div key={user.id} className="table-row">
              <div className="table-cell items-center px-2 py-1">
                {user.name}
              </div>
              <div className="table-cell items-center px-2 py-1">
                {user.email}
              </div>
              <div className="table-cell items-center px-2 py-1">
                <form action={deleteUserWithId}>
                  <Button type="submit">Delete</Button>
                </form>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
