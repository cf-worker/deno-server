import { listenAndServe } from "https://deno.land/std/http/server.ts"
import { requestHandler } from "./requestHandler.js"

const port = +(Deno.env.get("PORT") || "8787")

listenAndServe({ port }, requestHandler)

console.log("Listening on: http://0.0.0.0:" + port)
