'use server'
import { z } from 'zod'
import postgres from 'postgres'
import { revalidatePath } from 'next/cache'

const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.email(),
  created_at: z.date(),
})

const sql = postgres(process.env.DATABASE_URL!)

const AddUser = UserSchema.omit({ id: true, created_at: true })

export async function createUser(formData: FormData) {
  const { username, email } = AddUser.parse({
    username: formData.get('username'),
    email: formData.get('email'),
  })

  console.log('Creating user: ' + username + ' with address: ' + email)

  await sql`INSERT INTO users (username, email) VALUES (${username}, ${email})
  `
  revalidatePath('./dashboard/user-administration')
}
