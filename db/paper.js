const mongoose = require('mongoose');
const collectionName = "papers";

// 创建 schema
const schema = new mongoose.Schema({
    title:String,
    area:String
});

// 创建 model
const model = mongoose.model(collectionName, schema);



// 查找函数
async function findPaper(area) {
    return model.find({}).where('area').equals(area);
}

// 暴露函数
module.exports = {
    findPaper
}