globalThis.Function.prototype.constructor = (...args) => {
  throw new Error(
    "new Function is not available on Cloudflare Workers https://developers.cloudflare.com/workers/runtime-apis/web-standards#javascript-standards"
  )
}
