let convertQuiz = (quiz) => {
    let result = [];
    for (let i=0; i<quiz.questions.length; i++) {
        let question = quiz.questions[i]
        let q = {id : question.flowerid, image : question.flower, questionText : question.questiontext,
        answerOptions : []};
        let options = question.choices.split(',')
        for (let j=0; j < options.length; j++) {
            let o = {answerText : options[j], isCorrect : options[j].trim() == question.answer.trim()}
            q.answerOptions.push(o);
        }
        result.push(q);
    }
    return result;
}

module.exports = { convertQuiz }