const testType = require("../db/testType");
const paper = require("../db/paper");
const answer = require("../db/answer");

async function getTestType(req, res) {
  const findRes = await testType.findTestType();
  res.json(findRes);
}

async function getPaperByArea(req, res) {
  const area = req.query.area;
  const findRes = await paper.findPaperByArea(area);
  res.json(findRes);
}

async function insertPaper(req, res) {
  const { title, area, tag, questions } = req.body;
  await paper.insertPaper(title, area, tag, questions);
  res.send("保存成功");
}

async function deletePaper(req, res) {
  const { id } = req.body;
  console.log(id);
  await paper.deletePaper(id);
  res.send("删除成功");
}

async function insertAnswer(req, res) {
  const { paperID, userID, score, answers } = req.body;
  await answer.insertAnswer(paperID, userID, score, answers);
  res.send("保存成功");
}

async function getAnswerByPaperId(req, res) {
  const id = req.query.paperId;
  const findRes = await answer.findAnswerById({ paperID: id });
  res.json(findRes);
}

async function getAnswerByUserId(req, res) {
  const userId = req.query.userId;
  const findRes = await answer.findAnswerById({ userID: userId });
  res.json(findRes);
}

module.exports = {
  getTestType,
  getPaperByArea,
  insertPaper,
  deletePaper,
  insertAnswer,
  getAnswerByPaperId,
  getAnswerByUserId,
};
