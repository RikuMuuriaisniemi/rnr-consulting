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
    <form action={formAction}>
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
        <Button disabled={pending} type="submit">
          Create user
        </Button>
        {state?.message && <p aria-live="polite">{state.message}</p>}
      </div>
    </form>
  )
}
