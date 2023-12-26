const mongoose = require("mongoose");
const collectionName = "Answers";

// 创建 schema
const answerSchema = new mongoose.Schema({
  answerType: String,
  content: String,
});

const schema = new mongoose.Schema({
  paperID: String,
  userID: String,
  score: {
    type: Number,
    default: 0,
  },
  answers: [answerSchema],
});

// 创建 model
const model = mongoose.model(collectionName, schema);

// 查找函数
async function findAnswerById(id) {
  return model.find({}).where(id);
}

async function insertAnswer(paperID_i, userID_i, score_i, answers_i) {
  //生成实例，准备存入数据库
  const answerInstance = new model({
    paperID: paperID_i,
    userID: userID_i,
    score: score_i,
    answers: answers_i,
  });

  //存入数据库
  return answerInstance
    .save()
    .then(() => {
      console.log("数据保存成功");
    })
    .catch((err) => {
      console.log("数据保存失败：", err);
    });
}

// 暴露函数
module.exports = {
  findAnswerById,
  insertAnswer,
};
