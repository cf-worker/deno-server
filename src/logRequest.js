import { cyan, green, red, yellow } from "https://deno.land/std/fmt/colors.ts"

export function logRequest(request) {
  const method = paint(request.method)
  console.log(new Date().toJSON(), method, request.url)
}

function paint(method) {
  return (
    {
      GET: green(method),
      POST: yellow(method),
      DELETE: red(method),
      PATCH: cyan(method)
    }[method] || method
  )
}
