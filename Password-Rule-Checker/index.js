function hasMinimumLength(password) {
    return password.length >= 8;
}

function hasNumber(password) {
    return (/\d/).test(password);
}

function hasUpperCaseLetter(password) {
    return (/[A-Z]/).test(password);
}

function getFailedRules(password) {
    let res = [];
    if (!hasMinimumLength(password)) {
        res.push("minimum length")
    }
    if (!hasNumber(password)) {
        res.push("number");
    }
    if (!hasUpperCaseLetter(password)) {
        res.push("uppercase letter");
    }
    return res;
}

function validatePassword(password) {
    const failedRules = getFailedRules(password);
    const valid = hasMinimumLength(password) && hasNumber(password) && hasUpperCaseLetter(password);
    return {
        valid,
        failedRules
    }
}

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));