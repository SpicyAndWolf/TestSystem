const mongoose = require('mongoose');
const collectionName_testType = "test_type";

// 创建 schema
const testTypeSchema = new mongoose.Schema({
    area: String,
    way: [{
        paperType: String,
        nameList: [String]
    }]
});

// 创建 model
const testTypeModel = mongoose.model(collectionName_testType, testTypeSchema);



// 查找函数
async function findTestType() {
    return await testTypeModel.find({});
}

// 暴露函数
module.exports = {
    findTestType
}