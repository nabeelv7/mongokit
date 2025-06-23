import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./src/lib/server/utils/mongo"

export const { handle } = SvelteKitAuth({
    adapter: MongoDBAdapter(client),
    providers: [GitHub],
})