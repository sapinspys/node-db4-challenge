const express = require('express');

const recipesRouter = require('./routers/recipes-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcome to Node DB4 Challenge, use /api/recipes to get started')
})

server.use('/api/recipes', recipesRouter);

module.exports = server;