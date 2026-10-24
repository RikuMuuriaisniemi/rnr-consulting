import { betterAuth } from 'better-auth'
import { admin, username } from 'better-auth/plugins'
import { db } from './database'
import { nextCookies } from 'better-auth/next-js'

export const auth = betterAuth({
  database: { db, type: 'postgres' },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  plugins: [username(), admin(), nextCookies()],
  appName: 'R&R',
  baseURL: process.env.BETTER_AUTH_URL!,
  trustedOrigins: ['http://localhost:8888'],
})

admin({
  defaultRole: 'user',
})
