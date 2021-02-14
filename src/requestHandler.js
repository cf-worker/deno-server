import { convertRequest } from "./convertRequest.js"
import { FetchEventDeno } from "./FetchEventDeno.js"
import { decorateRequest } from "./decorateRequest.js"
import { logRequest } from "./logRequest.js"

export async function requestHandler(originalRequest) {
  const request = await convertRequest(originalRequest)
  logRequest(request)
  decorateRequest(request)
  dispatchEvent(new FetchEventDeno("fetch", { request, originalRequest }))
}
