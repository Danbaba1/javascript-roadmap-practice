function isAnswerCorrect(question, userAnswer) {
    if (!userAnswer) {
        return null;
    }
    if (question.id === userAnswer.questionId) {
        return question.correctAnswer === userAnswer.answer;
    }
    return null;
}

function countCorrectAnswers(questions, userAnswers) {
    let count = 0;
    for (const question of questions) {
        const matchingAnswer = userAnswers.find(userAnswer => userAnswer.questionId === question.id);
        if (isAnswerCorrect(question, matchingAnswer)) {
            count++;
        }

    }

    return count;
}

function calculatePercentage(correctCount, totalQuestions) {
    return (correctCount / totalQuestions) * 100;
}

function getResultMessage(percentage) {
    let message;
    if (percentage <= 25) {
        message = "Keep practicing";
    } else if (percentage <= 50) {
        message = "You tried";
    } else if (percentage <= 75) {
        message = "You passed";
    } else {
        message = "Excellent";
    }
    return message;
}

function createQuizResult(questions, userAnswers) {
    const correctCount = countCorrectAnswers(questions, userAnswers);
    const totalQuestions = questions.length;
    const percentage = calculatePercentage(correctCount, totalQuestions);
    const message = getResultMessage(percentage);
    return {
        correctCount,
        totalQuestions,
        percentage,
        message
    }
}

const questions = [
    { id: 1, correctAnswer: 'B' },
    { id: 2, correctAnswer: 'A' },
    { id: 3, correctAnswer: 'D' },
    { id: 4, correctAnswer: 'C' },
];

const userAnswers = [
    { questionId: 1, answer: 'B' },
    { questionId: 2, answer: 'C' },
    { questionId: 3, answer: 'D' },
    { questionId: 4, answer: 'C' },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));