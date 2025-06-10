import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    schema: './db/schema.ts',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
        authToken: process.env.DATABASE_AUTH_TOKEN,
    },
    verbose: true,
    strict: true,
});
