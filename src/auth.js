import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/server/utils/mongo"
import { env } from "$env/dynamic/private"

export const { handle } = SvelteKitAuth({
  adapter: MongoDBAdapter(client),
  providers: [GitHub],
  // trust the host when building locally
  trustHost: ({ host }) =>
    host === "localhost:4173" || env.NODE_ENV !== "production",
})