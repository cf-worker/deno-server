/**
 * Makes Request more debuggable
 */
export function decorateRequest(request) {
  Object.defineProperties(request, {
    url: {
      value: request.url,
      enumerable: true
    },
    method: {
      value: request.method,
      enumerable: true
    },
    body: {
      value: request.body,
      enumerable: true
    }
  })
}
