import { db } from '@/app/lib/database'
import { User } from './types'
import { auth } from './auth'
import { headers } from 'next/headers'

export async function fetchUsers() {
  const users = await auth.api.listUsers({
    query: {},
    // This endpoint requires session cookies.
    headers: await headers(),
  })
  return users
}

export async function fetchUserWithId(userId: string) {
  const user = await auth.api.getUser({
    query: {
      id: userId,
    },
    headers: await headers(),
  })

  return user
}
