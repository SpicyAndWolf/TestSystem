const mongoose = require('mongoose');
const databaseUrl = 'mongodb://tsAdmin:233@127.0.0.1:27017/TestSystemDB';

// 建立连接函数
async function connectDatabase() {
    mongoose.set('bufferCommands', false)
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