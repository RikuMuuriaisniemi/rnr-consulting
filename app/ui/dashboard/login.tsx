'use client'

import { useActionState, useState } from 'react'
import { Button } from '../button'
import { authClient } from '@/app/lib/auth-client'
import { setPassword } from 'better-auth/api'

export const initialState = {
  message: '',
}

export default function Login() {
  // const [state, formAction, pending] = useActionState(createUser, initialState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="table-header-group border-b-2 border-gray-600 p-2">
      <h2>Type your email and password to sign in</h2>
      <div>
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
        <Button
          onClick={async (e) => {
            e.preventDefault()
            const { error } = await authClient.signIn.email({
              email: email,
              password: password,
              rememberMe: true,
              callbackURL: '/dashboard/',
            })
          }}
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}
