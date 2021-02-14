import { listenAndServe } from "https://deno.land/std/http/server.ts"
import { freezeDateNow } from "./compatibility/freezeDateNow.js"
import "./compatibility/index.js"
import { forEach } from "./forEach.js"
import { logRequest } from "./logRequest.js"
import { requestHandler } from "./requestHandler.js"

const port = +(Deno.env.get("PORT") || "8787")

listenAndServe({ port }, forEach(logRequest, freezeDateNow, requestHandler))
const date = new Date().toJSON()
console.log()
console.log(date + " Listening on: http://0.0.0.0:" + port)
console.log()
