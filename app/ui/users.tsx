import { fetchUsers } from '../lib/data'

export default async function UsersList() {
  const users = await fetchUsers()

  if (!users || users.length === 0) {
    return <p className="mt-4 text-gray-400">No users available.</p>
  }

  return (
    <div className="p-2">
      <h2>Testing user database, list users here</h2>
      <table>
        <thead>
          <tr>
            <th className="items-center border px-2 py-1">Username</th>
            <th className="items-center border px-2 py-1">
              User's email address
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, u) => {
            return (
              <tr key={user.id}>
                <td className="items-center border p-1">{user.username}</td>
                <td className="items-center border p-1">{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
