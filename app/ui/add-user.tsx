'use client'

import { Button } from './button'
import { createUser } from '../lib/actions'
import { useActionState } from 'react'

const initialState = {
  message: '',
}

export default function AddUser() {
  const [state, formAction, pending] = useActionState(createUser, initialState)
  return (
    <form action={formAction} className="w-fit">
      <div className="grid w-fit">
        <div className="flex flex-row justify-end px-2 py-2">
          <h1 className="my-1 justify-end">Username:</h1>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="mx-2 w-70 rounded-sm bg-mist-600 px-1 text-white shadow-sm shadow-black"
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
          />
        </div>

        <div className="m-2 flex flex-row items-center justify-self-end text-end">
          {state?.message && (
            <p className="text-wrap" aria-live="polite">
              {state.message}
            </p>
          )}
          <Button disabled={pending} type="submit">
            Create user
          </Button>
        </div>
      </div>
    </form>
  )
}
