const express = require('express');
const gachaController = require('./gacha-controller');
const route = express.Router();

module.exports = (app) => {
  app.use('/gacha', route);
  route.post('/roll', gachaController.roll);
  route.get('/history/:userId', gachaController.history);
  route.get('/prizes', gachaController.inventory);
  route.get('/winners', gachaController.winners);
};