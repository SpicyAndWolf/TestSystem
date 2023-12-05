const mongoose = require('mongoose');

const databaseUrl = 'mongodb://tsAdmin:233@127.0.0.1:27017/TestSystemDB';
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


// 建立连接函数
async function connectDatabase() {
    mongoose.set('bufferCommands', false)
    return mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
}

// 查找函数
async function findUser() {
    return UserModel.find({})
}

//测试函数
async function run() {
    const connectRes = await connectDatabase();
    const findRes = await findUser();

    //打印结果
    console.log(findRes)
    //关闭连接
    mongoose.connection.close();
}

run()
