import { readerFromStreamReader } from "https://deno.land/std/io/mod.ts"

/**
 * Converts CloudFlare Worker Response https://developer.mozilla.org/pt-BR/docs/Web/API/Response
 * to Response from https://deno.land/std/http/server.ts
 * Just the body needs conversion.
 */
export function convertResponse(response) {
  return {
    status: response.status,
    headers: response.headers,
    body: response.body && readerFromStreamReader(response.body.getReader())
  }
}
