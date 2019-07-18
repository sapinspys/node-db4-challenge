const express = require('express');

const recipesRouter = require('./routers/recipes-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>)

server.use('/api/schemes', SchemeRouter);

module.exports = server;