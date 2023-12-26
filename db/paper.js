const mongoose = require("mongoose");
const collectionName = "papers";

// 创建 schema
const schema = new mongoose.Schema({
  title: String,
  area: String,
});

// 创建 model
const model = mongoose.model(collectionName, schema);

// 查找函数
async function findPaper(area) {
  return model.find({}).where("area").equals(area);
}

async function insertPaper(title_i, area_i) {
  //生成实例，准备存入数据库
  const paperInstance = new model({
    title: title_i,
    area: area_i,
  });

  //存入数据库
  return paperInstance
    .save()
    .then(() => {
      console.log("数据保存成功");
    })
    .catch((err) => {
      console.log("数据保存失败：", err);
    });
}

async function updatePaper(objectId, title, area) {
  return model
    .findByIdAndUpdate(objectId, { title: title, area: area })
    .then(() => {
      console.log("数据修改成功");
    })
    .catch((err) => {
      console.log("数据修改失败：", err);
    });
}

// 暴露函数
module.exports = {
  findPaper,
  insertPaper,
  updatePaper,
};
