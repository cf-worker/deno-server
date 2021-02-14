// favicon
addEventListener("fetch", event => {
  if ("/favicon.ico" === new URL(event.request.url).pathname)
    event.respondWith(
      Response.redirect("https://www.cloudflare.com/favicon.ico", 301)
    )
})

// Root path
addEventListener("fetch", event => {
  const url = new URL(event.request.url)
  if ("/" === url.pathname)
    event.respondWith(
      new Response(HTML({url: url.toString()}), {
        headers: { "Content-Type": "text/html" }
      })
    )
})

async function postAction(request) {
  const form = await request.formData()
  const body = JSON.stringify(Object.fromEntries(form.entries()))
  return new Response(body, {
    status: 201,
    headers: { "Content-Type": "application/json" }
  })
}

// /post form
addEventListener("fetch", async event => {
  if ("/post" === new URL(event.request.url).pathname) {
    // if await before respondWith, 404 will execute first
    // const response = await postAction(event.request)
    // event.respondWith(response)

    // the correct way is to call respondWith with a Promise
    event.respondWith(postAction(event.request))
  }
})

// 404 must be the last one
addEventListener("fetch", event => {
  event.respondWith(new Response("Not Found!", { status: 404 }))
})

const HTML = props => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cloudflare Worker Deno Server Demo</title>
  </head>
  <body>
    <h1>Cloudflare Worker Deno Server Demo</h1>
    <h4>${props.url}</h4>
    <form method="post" action="/post" enctype="application/x-www-form-urlencoded">
      <input name="title" value="Deno Server" />
      <button type="submit">Send</button>
    </form>
    <a href="/foo">404</a>
  </body>
</html>
`
