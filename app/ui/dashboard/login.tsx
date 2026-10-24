'use client'

import { useActionState, useState } from 'react'
import { Button } from '../button'
import { authClient } from '@/app/lib/auth-client'
import { setPassword } from 'better-auth/api'
import Link from 'next/link'

export const initialState = {
  message: '',
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, setState] = useState('')

  return (
    <div className="table-header-group border-gray-600 p-2">
      <h2 className="pb-1">Type your email and password to sign in</h2>
      {state && (
        <p className="text-wrap text-red-600" aria-live="polite">
          {state}
        </p>
      )}
      <div>
        <div className="flex flex-row justify-end py-2 pl-2">
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
        <div className="flex flex-row justify-end py-2 pl-2">
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
        <div className="flex flex-col">
          <div className="flex content-center justify-end">
            <Button
              className="w-full place-content-center"
              onClick={async (e) => {
                e.preventDefault()
                const { error } = await authClient.signIn.email(
                  {
                    email: email,
                    password: password,
                    rememberMe: true,
                    callbackURL: '/dashboard/',
                  },
                  {
                    onRequest: () => {},
                    onSuccess: () => {},
                    onError: (ctx) => {
                      // display the error message
                      setState(ctx.error.message)
                    },
                  }
                )
              }}
            >
              Sign in
            </Button>
          </div>
          <div className="flex-1 flex-col content-center p-2">
            <p className="content-cente flex place-content-center">
              Haven't registered yet?
            </p>
            <Link
              href="/dashboard/signup"
              className="mt-3 flex h-10 w-full place-content-center items-center rounded-lg bg-cyan-600 px-3 text-sm font-medium shadow-md shadow-black transition-colors hover:bg-blue-400 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
