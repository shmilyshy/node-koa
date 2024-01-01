const Koa = require("koa")

const app = new Koa()


// ctx.req 是 Node.js 原生的 HTTP 请求对象。这意味着你可以使用 Node.js HTTP 模块提供的所有方法和属性。
// ctx.req.method // 获取 HTTP 请求方法
// ctx.req.headers // 获取 HTTP 请求头

// ctx.request 是 Koa.js 提供的一个封装对象，它提供了更多的方法和属性，使得处理 HTTP 请求更加方便。
// ctx.request.method // 获取 HTTP 请求方法
// ctx.request.header // 获取 HTTP 请求头
// ctx.request.query // 获取 URL 查询参数

// ctx.res 是 Node.js 原生的 HTTP 响应对象。
// 这意味着你可以使用 Node.js HTTP 模块提供的所有方法和属性。
// 但是，直接使用 ctx.res 可能会绕过 Koa.js 的响应处理，可能会导致一些预期之外的行为。

// ctx.response 是 Koa.js 提供的一个封装对象，它提供了更多的方法和属性，使得处理 HTTP 响应更加方便。
// 例如，你可以使用 ctx.response.body 来设置响应体，
// 或者使用 ctx.response.status 来设置 HTTP 状态码

app.use((ctx, next) => {
  ctx.body = "hello koa"
  next()
})

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000")
})


