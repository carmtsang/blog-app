import { createClient } from "@vercel/postgres";

export async function connectDB() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log("Connected to database");
      return client;
    }
  } catch (e) {
    console.error("Error connecting to database", e);
  }
}
