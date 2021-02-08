/**
 * Converts a Request from https://deno.land/std/http/server.ts
 * to a CloudFlare Worker Request https://developer.mozilla.org/pt-BR/docs/Web/API/Request
 */
export async function convertRequest(originalRequest) {
  // url contains just the pathname part
  const url = "http://0.0.0.0" + originalRequest.url

  // makes body compatible with Request body by reading it all in advance
  const body = await Deno.readAll(originalRequest.body)

  return new Request(url, {
    method: originalRequest.method,
    headers: originalRequest.headers,
    body
  })
}
