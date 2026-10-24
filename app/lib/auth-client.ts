import { createAuthClient } from 'better-auth/react'
import { adminClient, usernameClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL:
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'https://*.rnrconsulting.eu/',
  trustedOrigins: ['http://localhost:8888', 'https://*.rnrconsulting.eu/'],
  plugins: [usernameClient(), adminClient()],
})
