const http = require('http')

require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`listening on ${PORT}....`)
})

