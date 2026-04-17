const gachaService = require('./gacha-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function roll(request, response, next) {
  try {
    const { userId } = request.body;
    if (!userId) throw errorResponder(errorTypes.VALIDATION_ERROR, 'User ID required');
    const result = await gachaService.playGacha(userId);
    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function history(request, response, next) {
  try {
    const { userId } = request.params;
    const result = await gachaService.getHistory(userId);
    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function inventory(request, response, next) {
  try {
    const result = await gachaService.getPrizeList();
    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function winners(request, response, next) {
  try {
    const result = await gachaService.getWinners();
    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  roll,
  history,
  inventory,
  winners,
};