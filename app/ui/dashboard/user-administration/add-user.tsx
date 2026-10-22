'use client'

import { Button } from '../../button'
import { createUser } from '../../../lib/actions'
import { useActionState, useState } from 'react'
import { authClient } from '@/app/lib/auth-client'

export const initialState = {
  message: '',
}

export default function AddUser() {
  const [state, formAction, pending] = useActionState(createUser, initialState)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
  return (
    <form action={formAction} className="w-fit">
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
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="m-2 flex flex-row items-center justify-self-end text-end">
          {state?.message && (
            <p className="text-wrap" aria-live="polite">
              {state.message}
            </p>
          )}
          <Button
            disabled={pending}
            onClick={async () => {
              const { error } = await authClient.admin.createUser({
                email: email,
                name: name,
                password: password,
                role: 'user',
                data: { username: username },
              })
            }}
          >
            Create user
          </Button>
        </div>
      </div>
    </form>
  )
}
