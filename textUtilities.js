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
    const lines = cleanString.split(/\r?\n/);
    const joinedLines = lines.join(' ');
    const words = joinedLines.split(' ');
    return words;
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

function createReportString(originalText, searchWord, charNumber, noSpaceCharNumber, wordNumber, occurrence, frequencyData) {
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
    frequencyData + '\n ' 
    occurrenceString;

    return report;
}

function createFrequencyData(string) {
    const freqObj = wordsFrequency(string);
    const freqArray = fromFrequencyObjToArray(freqObj);
    freqArray.sort(compareFrequency);

    let frequencyData = 'Frequenza parole\n';

    for (const freq of freqArray) {
        frequencyData = frequencyData + freq.word + ': ' + freq.frequency + '\n'
    }

    return frequencyData
}

function compareFrequency(freq1, freq2) {
    return freq2.frequency - freq1.frequency
}


function wordsFrequency(string) {
    const frequencyObj = {};
    const wordsArray = createArrayOfWordsFromString(string);

    for (const word of wordsArray) {
        if (frequencyObj[word.toLowerCase()] === undefined) {
            frequencyObj[word.toLowerCase()] = 1;
        } else {
            frequencyObj[word.toLowerCase()] = frequencyObj[word.toLowerCase()] + 1;
        }
        
    }

return frequencyObj
}



function fromFrequencyObjToArray(frequency) {

    const frequencyArray = [];

    for (const property in frequency) {
        if (Object.hasOwnProperty.call(frequency, property)) {
            const values = frequency[property];
            const obj = {word: property, frequency: values}
            frequencyArray.push(obj)
        }
    }
    return frequencyArray
}

exports.getCharNumber = getCharNumber;
exports.getCharNumberWithoutSpaces = getCharNumberWithoutSpaces;
exports.getWordNumberFromString = getWordNumberFromString;
exports.getOccurrenceOfWordInString = getOccurrenceOfWordInString;
exports.createReportString = createReportString;
exports.createFrequencyData = createFrequencyData;




