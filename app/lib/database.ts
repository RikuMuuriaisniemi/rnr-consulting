import { Kysely } from 'kysely'
import { PostgresJSDialect } from 'kysely-postgres-js'
import { Database } from '@/app/lib/types'
import postgres from 'postgres'
import { getConnectionString, getDatabase } from '@netlify/database'

export const db = new Kysely<Database>({
  dialect: new PostgresJSDialect({
    postgres: postgres(process.env.DATABASE_URL!),
  }),
})
