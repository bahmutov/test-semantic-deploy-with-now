const test = require('ava')
const got = require('got')

const server = process.env.NOW_URL
  ? process.env.NOW_URL
  : 'http://localhost:5000'
console.log('testing server at', server)

test('server page', async t => {
  const info = await got(server)
  t.snapshot(info.body)
})
