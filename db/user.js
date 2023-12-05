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

// 和数据库建立连接
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        try {
            const result = await UserModel.find({});
            console.log('查询结果：', result);
        }
        catch (err) {
            console.error('访问Collection错误：', err);
        }
        finally {
            mongoose.connection.close();
        }
    })
    .catch(err => {
        console.error('无法连接到数据库：', err);
    });
