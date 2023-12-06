const mongoose = require('mongoose');
const collectionName = 'User';

// 创建 schema
const userSchema = new mongoose.Schema({
    id: String,
    userName: String,
    password: String,
    nickName: String,
    email: String
});
// 创建 model
const UserModel = mongoose.model(collectionName, userSchema);


// 查找函数
async function findUser() {
    return UserModel.find({})
}


module.exports = {
    findUser
}