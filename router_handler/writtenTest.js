const testType = require('../db/testType')

async function getTestType(req, res) {
    const findRes = await testType.findTestType();
    res.send(findRes)
}

module.exports = {
    getTestType
}