function formatStory(objects) {
    let story = objects.map(sentence => {
        return sentence.sentence + '. '
    });

    function insertNewLine(sentences) {
        let newSentences = [];
        for (let i = 0; i < sentences.length; i++) {
          newSentences.push(sentences[i]);
          if ((i + 1) % 5 === 0) {
            newSentences.push('\n');
          }
        }
        return newSentences.join('\n');
    }

    return insertNewLine(story)
}

module.exports = { formatStory }