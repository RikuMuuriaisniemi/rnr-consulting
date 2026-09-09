'use server'
import { z } from 'zod'
import postgres from 'postgres'
import { revalidatePath } from 'next/cache'
import { fetchUsername } from './data'
import { User } from './definitions'
import { DatabaseError } from './error.definitions'

const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.email(),
  created_at: z.date(),
})

const sql = postgres(process.env.DATABASE_URL!)

const AddUser = UserSchema.omit({ id: true, created_at: true })

export async function createUser(prevState: any, formData: FormData) {
  const { username, email } = AddUser.parse({
    username: formData.get('username'),
    email: formData.get('email'),
  })

  console.log('Trying to create user: ' + username + ' with address: ' + email)
  try {
    await sql<
      User[]
    >`INSERT INTO users (username, email) VALUES (${username}, ${email}) RETURNING *
  `
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('duplicate key')) {
        return { message: 'The username and/or email is already taken!' }
      }
    }
  }

  revalidatePath('./dashboard/user-administration')
}

export async function deleteUser(userId: number) {
  await sql`DELETE FROM users WHERE id = ${userId}`
}
