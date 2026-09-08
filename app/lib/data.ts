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
    throw new Error('Failed to fetch revenue data.')
  }
}
