function getCharNumber(string) {
    return string.length
}

function getCharNumberWithoutSpaces(string) {
    let stringWithoutSpaces = string.replaceAll(" ", "");
    return getCharNumber(stringWithoutSpaces);
}


function clearString(string) {
    const cleanString = string.replaceAll("'", " ")
        .replaceAll("!", "")
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll("?", "");
    return cleanString
}

function createArrayOfWordsFromString(string) {
    const cleanString = clearString(string);
    return cleanString.split(' ');
}

function getWordNumberFromString(string) {
    const wordArray = createArrayOfWordsFromString(string);
    return wordArray.length
}

function getOccurrenceOfWordInString(searchWord, string) {
    let occurrence = 0;
    const wordArray = createArrayOfWordsFromString(string);
    for (const word of wordArray) {
        if (word.toLowerCase() === searchWord.toLocaleLowerCase()) {
            occurrence++;
        }
    }
    return occurrence;
}

function createReportString(originalText, searchWord, charNumber, noSpaceCharNumber, wordNumber, occurrence) {
    let occurrenceString = '';
    if (occurrence >= 0 ) {
        occurrenceString = ('La parola "' + searchWord + '" viene ripetuta ' + occurrence + (occurrence === 1 ? ' volta' : ' volte'));
    } else {
        occurrenceString = ('Non hai cercato nessuna parola da conteggiare');
    }
    const report = originalText + '\n' +
    '\n' +
    'Numero di caratteri: ' + charNumber + '\n' +
    'Numero di caratteri spazi esclusi: ' + noSpaceCharNumber + '\n' +
    'Numero di parole: ' + wordNumber + '\n' +
    occurrenceString;

    return report;
}


exports.getCharNumber = getCharNumber;
exports.getCharNumberWithoutSpaces = getCharNumberWithoutSpaces;
exports.getWordNumberFromString = getWordNumberFromString;
exports.getOccurrenceOfWordInString = getOccurrenceOfWordInString;
exports.createReportString = createReportString;
