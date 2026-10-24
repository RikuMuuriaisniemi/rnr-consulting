'use client'
import { Button } from '../../button'
import { useState } from 'react'
import { authClient } from '@/app/lib/auth-client'
import { User } from 'lucide-react'

export default function AddUser() {
  const [state, setState] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'user' | 'admin'>('user')

  const testRole = 'admin'
  return (
    <div className="w-fit">
      <div className="grid w-fit">
        <div className="flex flex-row justify-end px-2 py-2">
          <h1 className="my-1 justify-end">Name:</h1>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end px-2 py-2">
          <h1 className="my-1 justify-end">Userame:</h1>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-end px-2 py-2">
          <h1 className="my-1 justify-end">Email:</h1>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end px-2 py-2">
          <h1 className="my-1 justify-end">Password:</h1>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end px-2 py-2">
          <h1 className="my-1 justify-end">Role:</h1>
          <select
            name="role"
            id="role"
            required
            className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            onChange={(e) => {
              const value = e.target.value
              if (value === 'user' || value === 'admin') setRole(value)
            }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="m-2 flex flex-row items-center justify-self-end text-end">
          {state && (
            <p className="text-wrap" aria-live="polite">
              {state}
            </p>
          )}
          <Button
            onClick={async () => {
              const {} = await authClient.admin.createUser(
                {
                  email: email,
                  name: name,
                  password: password,
                  role: role,
                  data: { username: username },
                },
                {
                  onRequest: () => {
                    setState('Adding...')
                  },
                  onSuccess: () => {
                    setState('User has been added!')
                  },
                  onError: (ctx) => {
                    // display the error message
                    setState(ctx.error.message)
                  },
                }
              )
            }}
          >
            Create user
          </Button>
        </div>
      </div>
    </div>
  )
}
