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
  const [state, setState] = useState('')
  return (
    <div className="table-header-group border-gray-600 p-2">
      <h2 className="my-3 text-center text-xl underline antialiased">
        Register
      </h2>
      {state && (
        <p className="text-wrap" aria-live="polite">
          {state}
        </p>
      )}
      <div>
        <div>
          <div className="flex flex-row justify-end py-2 pr-2 pl-4">
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
          <div className="flex flex-row justify-end py-2 pr-2 pl-4">
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
          <div className="flex flex-row justify-end py-2 pr-2 pl-4">
            <h1 className="my-1 justify-end">Username:</h1>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUserName(e.target.value)}

              className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
            />
          </div>
          <div className="flex flex-row justify-end pt-2 pr-2 pb-3 pl-4">
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
          <div className="flex p-2">
            <Button
              className="w-full place-content-center"
              onClick={async (e) => {
                e.preventDefault()
                const { error } = await authClient.signUp.email(
                  {
                    email: email,
                    name: name,
                    password: password,
                  },
                  {
                    onRequest: () => {
                      setState('Registering...')
                    },
                    onSuccess: () => {
                      setState('Registering successful!')
                    },
                    onError: (ctx) => {
                      // display the error message
                      setState(ctx.error.message)
                    },
                  }
                )
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
