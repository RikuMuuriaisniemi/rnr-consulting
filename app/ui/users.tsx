import { authClient } from '../lib/auth-client'
import { fetchUsers, fetchUserWithId } from '../lib/data'

export default async function UsersList() {
  const fetchedUsers = await fetchUsers()

  if (fetchedUsers.total === 0) {
    return <p className="mt-4 text-gray-400">No users available.</p>
  }

  return (
    <div className="p-2">
      <div className="table w-xl border-collapse overflow-hidden rounded-md shadow-md shadow-black">
        <div className="table-header-group border-b-2 border-gray-600">
          <div className="table-row bg-gray-400/50 font-medium">
            <div className="table-cell items-center px-2 py-1">Username</div>
            <div className="table-cell items-center px-2 py-1">
              Email address
            </div>
            <div className="table-cell items-center px-2 py-1">Role</div>
          </div>
        </div>
        <div className="table-row-group divide-y-3 divide-gray-600 bg-gray-500/50 font-medium">
          {fetchedUsers.users.map((user) => {
            return (
              <div key={user.id} className="table-row">
                <div className="table-cell items-center px-2 py-1">
                  {user.name}
                </div>
                <div className="table-cell items-center px-2 py-1">
                  {user.email}
                </div>
                <div className="table-cell items-center px-2 py-1">
                  {user.role}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
