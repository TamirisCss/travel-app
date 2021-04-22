import "core-js/stable";
import "regenerator-runtime/runtime";
import { app } from '../src/server/index' // link to server/index.js file
const req = require('supertest')

it('should send index.html from dist folder as response', async done => {
  const res = await req(app)
  .get('/')
  .send('../dist/index.html')
  expect(res.status).toBe(200)
  done()
})