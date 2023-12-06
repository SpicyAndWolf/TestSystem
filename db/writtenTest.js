const mongoose = require('mongoose');
const collectionName_paper = 'writtenpaper';

// 创建 schema
const paperSchema = new mongoose.Schema({
    id: String,
    userName: String,
    password: String,
    nickName: String,
    email: String
});
// 创建 model
const paperModel = mongoose.model(collectionName_paper, paperSchema);


// 查找函数
async function findPaper() {
    return paperModel.find({})
}

// 暴露函数
module.exports = {
    findPaper
}