export function freezeDateNow() {
  const now = Date.now()
  Date.now = () => now
}
