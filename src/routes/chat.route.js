const express = require('express')
const { getResponse } = require('./chat.controller')


const chatRouter = express.Router()

chatRouter.post('/', getResponse)

module.exports = chatRouter