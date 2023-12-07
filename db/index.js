const mongoose = require('mongoose');
const databaseUrl = 'mongodb://tsAdmin:233@127.0.0.1:27017/TestSystemDB';

//添加监听器，检查数据库连接是否成功
mongoose.connection.on('error', console.error.bind(console, '连接TestSystemDB失败'));
mongoose.connection.once('open', () => console.log('成功连接TestSystemDB'));

// 建立连接函数
async function connectDatabase() {
    return mongoose.connect(databaseUrl)
}

async function closeDatabase() {
    return mongoose.connection.close();
}

// 暴露
module.exports = {
    connectDatabase,
    closeDatabase
}