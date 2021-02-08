import { convertResponse } from "./convertResponse.js"

// https://developer.mozilla.org/pt-BR/docs/Web/API/Request/Request
export class FetchEventDeno extends CustomEvent {
  constructor(type, init) {
    super(type, init)
    this.request = init.request
    this.originalRequest = init.originalRequest
  }

  async respondWith(response) {
    // only the first respondWith should execute
    this.stopImmediatePropagation()
    // response can be a Promise
    response = await response
    response = convertResponse(response)
    this.originalRequest.respond(response)
  }

  waitUntil(promise) {
    promise
      .then(data => console.log("waitUntil.then", data))
      .catch(data => console.log("waitUntil.catch", data))
  }
}
