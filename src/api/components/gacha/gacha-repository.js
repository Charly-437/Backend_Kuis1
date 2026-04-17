const { Gachas, Prize } = require('../../../models');

async function getLogs() {
  return Gachas.find({}).populate('userId', 'name');
}

async function getUserLogs(userId) {
  return Gachas.find({ userId });
}

async function createLog(userId, prizeName) {
  return Gachas.create({ userId, prizeName });
}

async function getPrizes() {
  return Prize.find({});
}

async function updatePrize(prizeId) {
  return Prize.updateOne({ _id: prizeId }, { $inc: { kuota: -1 } });
}

module.exports = {
  getLogs,
  getUserLogs,
  createLog,
  getPrizes,
  updatePrize,
};