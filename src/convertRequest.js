/**
 * Converts a Request from https://deno.land/std/http/server.ts
 * to a CloudFlare Worker Request https://developer.mozilla.org/pt-BR/docs/Web/API/Request
 */
export async function convertRequest(originalRequest) {
  // url contains just the pathname part,
  // extract the host from request origin
  const origin = originalRequest.headers.get("host") || "http://localhost:8787"
  const protocol = originalRequest.proto.toLowerCase().startsWith("https")
    ? "https"
    : "http"
  const url = protocol + "://" + origin + originalRequest.url

  // makes body compatible with Request body by reading it all in advance
  const body = await Deno.readAll(originalRequest.body)

  return new Request(url, {
    method: originalRequest.method,
    headers: originalRequest.headers,
    body
  })
}
