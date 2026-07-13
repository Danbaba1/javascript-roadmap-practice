function getLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}

function hasPassed(score) {
    return score >= 60;
}

function getFeedback(grade) {
    let message = ""
    if (grade == "A") {
        message = "Excellent work"
    } else if (grade == "B") {
        message = "Good work"
    } else if (grade == "F") {
        message = "Keep practicing"
    } else {
        message = "You Passed"
    }
    return message;
}

function createGradeReport(name, score) {
    const grade = getLetterGrade(score);
    const passed = hasPassed(score);
    const feedback = getFeedback(grade);
    return {
        name,
        score,
        grade,
        passed,
        feedback
    }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));