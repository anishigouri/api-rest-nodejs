import fastify from 'fastify'
import { knex } from './database'
import crypto from 'crypto'

const app = fastify()

app.get('/hello', async () => {
  return await knex('transactions').select('*')
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running')
  })
