const gachaRepository = require('./gacha-repository');
const usersService = require('../users/users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

function maskName(name) {
  if (!name) return '***';
  const len = name.length;
  if (len <= 2) return '*';
  return name[0] + '*'.repeat(len - 2) + name[len - 1];
}

async function playGacha(userId) {
  const user = await usersService.getUser(userId);
  if (!user) {
    throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
  }

  const logs = await gachaRepository.getUserLogs(userId);
  if (logs.length >= 5) {
    throw errorResponder(errorTypes.VALIDATION_ERROR, 'Gacha limit reached');
  }

  const prizes = await gachaRepository.getPrizes();
  const available = prizes.filter((p) => p.kuota > 0);

  let result = 'Zonk';
  if (available.length > 0 && Math.random() < 0.3) {
    const luckyPick = available[Math.floor(Math.random() * available.length)];
    result = luckyPick.nama;
    await gachaRepository.updatePrize(luckyPick._id);
  }

  return gachaRepository.createLog(userId, result);
}

async function getHistory(userId) {
  return gachaRepository.getUserLogs(userId);
}

async function getPrizeList() {
  return gachaRepository.getPrizes();
}

async function getWinners() {
  const logs = await gachaRepository.getLogs();
  const winners = logs.filter((log) => log.prizeName !== 'Zonky');

  return winners.map((win) => ({
    prizeName: win.prizeName,
    winnerName: maskName(win.userId?.name),
    date: win.createdAt,
  }));
}

module.exports = {
  playGacha,
  getHistory,
  getPrizeList,
  getWinners,
};