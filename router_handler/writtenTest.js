const testType = require('../db/testType')
const paper=require('../db/paper')

async function getTestType(req, res) {
    const findRes = await testType.findTestType();
    res.json(findRes)
}

async function getPaper(req, res) {
    const area=req.query.area
    const findRes = await paper.findPaper(area);
    res.json(findRes)
}

// async function insertPaper(req, res) {
    
// }

module.exports = {
    getTestType,
    getPaper
}