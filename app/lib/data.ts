import postgres from 'postgres'
import { User } from './definitions'

const sql = postgres(process.env.DATABASE_URL!)

export async function fetchUsers() {
  try {
    console.log('Fetching list of users..')

    const data = await sql<User[]>`SELECT * FROM users`

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch users.')
  }
}

export async function fetchUsername(username: string) {
  try {
    console.log('Fetching list of users..')

    const data = await sql<
      User[]
    >`SELECT username FROM users WHERE username = ${username}`

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch User data with username: ' + username)
  }
}
