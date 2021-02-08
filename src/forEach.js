// returns a function that call args for each functionn from params
export function forEach(...functions) {
  return function (...args) {
    functions.forEach(fn => fn(...args))
  }
}
