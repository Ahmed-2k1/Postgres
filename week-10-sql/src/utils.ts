import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:sp7SjdqrI6wT@ep-round-mouse-a4fa2ajp.us-east-1.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}