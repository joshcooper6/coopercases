const app = require('express')();
const port = 6000;
const { test } = require('./db');
const { getSentencesWithType } = require('./getSentences.js');
const { formatStory } = require('./formatStory');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function main() {
    await mongoose.connect(`${process.env.db}`);
}

main().then(res => console.log('DB Connected!')).catch(err => console.log(err));

const sentenceObjs = getSentencesWithType(test);
console.log(formatStory(sentenceObjs));

const questions = sentenceObjs.filter(object => object.type === 'question');

app.use(require('cors')());

app.get('/', (req, res) => {
    res.send(sentenceObjs)
});

app.listen(port, () => {
    console.log(`Server is connected at Port ${port}`)
});