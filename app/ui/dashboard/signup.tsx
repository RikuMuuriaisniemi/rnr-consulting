'use client'

import { useState } from 'react'
import { Button } from '../button'
import { authClient } from '@/app/lib/auth-client'

export const initialState = {
  message: '',
}

export default function Signup() {
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="table-header-group border-b-2 border-gray-600 p-2">
      <h2>Type your username and password to sign in</h2>
      <div className="w-fit">
        <div>
          <div className="flex flex-row justify-end px-2 py-2">
            <h1 className="my-1 justify-end">Email:</h1>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            />
          </div>
          <div className="flex flex-row justify-end px-2 py-2">
            <h1 className="my-1 justify-end">Name:</h1>
            <input
              type="text"
              name="Name"
              id="Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            />
          </div>
          <div className="flex flex-row justify-end px-2 py-2">
            <h1 className="my-1 justify-end">Username:</h1>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUserName(e.target.value)}

              className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            />
          </div>
          <div className="flex flex-row justify-end px-2 py-2">
            <h1 className="my-1 justify-end">Password:</h1>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            />
          </div>
          <Button
            onClick={async (e) => {
              e.preventDefault()
              const { error } = await authClient.signUp.email({
                email: email,
                name: name,
                password: password,
              })
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}
