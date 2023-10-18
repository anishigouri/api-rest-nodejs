import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  return await knex('transactions').select('*')
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running')
  })
