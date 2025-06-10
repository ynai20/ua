import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const userAgent = c.req.header('User-Agent')
  return c.json({
    UserAgent: userAgent
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Ready: http://localhost:${info.port}`)
})
