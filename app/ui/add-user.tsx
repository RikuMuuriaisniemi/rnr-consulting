import { Button } from './button'
import { createUser } from '../lib/actions'

export default function AddUser() {
  return (
    <form action={createUser}>
      <div className="m-2">
        <h1>Username:</h1>
        <input
          type="text"
          name="username"
          id="username"
          required
          className="bg-white text-black"
        />

        <h1>Email:</h1>
        <input
          type="email"
          name="email"
          id="username"
          required
          className="bg-white text-black"
        />
        <Button type="submit">Create user</Button>
      </div>
    </form>
  )
}
