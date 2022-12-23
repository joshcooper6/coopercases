const app = require('express')();
const port = 6000;
const { test } = require('./db');
const { getSentencesWithType } = require('./getSentences.js');
const { formatStory } = require('./formatStory');

const sentenceObjs = getSentencesWithType(test);
console.log(formatStory(sentenceObjs))

app.use(require('cors')());

app.get('/', (req, res) => {
    res.send('Hello')
});

app.listen(port, () => {
    console.log(`Server is connected at Port ${port}`)
});