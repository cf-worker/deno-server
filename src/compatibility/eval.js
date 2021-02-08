globalThis.eval = code => {
  throw new Error(
    "eval is not available on Cloudflare Workers https://developers.cloudflare.com/workers/runtime-apis/web-standards#javascript-standards"
  )
}
