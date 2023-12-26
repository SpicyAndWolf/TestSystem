const testType = require("../db/testType");
const paper = require("../db/paper");
const answer = require("../db/answer");

async function getTestType(req, res) {
  const findRes = await testType.findTestType();
  res.json(findRes);
}

async function getPaper(req, res) {
  const area = req.query.area;
  const findRes = await paper.findPaper(area);
  res.json(findRes);
}

async function insertPaper(req, res) {
  const { title, area } = req.body;
  await paper.insertPaper(title, area);
  res.send("保存成功");
}

async function updatePaper(req, res) {
  const { objectId, title, area } = req.body;
  await paper.updatePaper(objectId, title, area);
  res.send("更新成功");
}

async function insertAnswer(req, res) {
  const { paperID, userID, answers } = req.body;
  await answer.insertAnswer(paperID, userID, answers);
  res.send("保存成功");
}

async function getAnswer(req, res) {
  const id = req.query.id;
  const findRes = await answer.findAnswer(id);
  res.json(findRes);
}

module.exports = {
  getTestType,
  getPaper,
  insertPaper,
  updatePaper,
  insertAnswer,
  getAnswer,
};
