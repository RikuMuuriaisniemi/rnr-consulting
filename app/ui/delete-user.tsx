import { deleteUser } from '../lib/actions'
import { fetchUsers } from '../lib/data'
import { Button } from './button'

function handleDeleteUser(userId: number) {
  deleteUser(userId)
}

export default async function DeleteUser() {
  const users = await fetchUsers()

  if (!users || users.length === 0) {
    return <p className="mt-4 text-gray-400">No users available.</p>
  }
  return (
    <div>
      <div>
        <h1>This is placeholder header for delete user</h1>
      </div>
      <div></div>
    </div>
  )
}
