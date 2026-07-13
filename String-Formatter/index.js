function cleanText(text) {
    return text.trim();
}

function capitalizeText(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
}

function formatDisplayName(firstName, lastName) {
    return `${capitalizeText(cleanText(firstName))} ${capitalizeText(cleanText(lastName))}`;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));