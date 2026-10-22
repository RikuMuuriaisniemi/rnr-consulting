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

export async function fetchUsername(username: string) {
  try {
    console.log('Fetching list of users..')

    const data = await db
      .selectFrom('user')
      .where('user.username', '=', username)

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch User data with username: ' + username)
  }
}
