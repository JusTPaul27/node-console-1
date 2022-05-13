const textUtlities = require('./textUtilities.js');
const inputOutput = require('./inputOutputUtilities.js');
const consoleUtilities = require('./consoleUtilities.js');

const inputUrl = consoleUtilities.getArgumentOrExitWithErrorAndIndex("devi inserire l'input url", 0);

const outputUrl = consoleUtilities.getArgumentOrExitWithErrorAndIndex("devi inserire l'output url", 1);

let searchWord = consoleUtilities.getOptionalArgumentWithIndex(2);

let fileData = inputOutput.readFileDataWithUrl(inputUrl);

const charNumber = textUtlities.getCharNumber(fileData)
console.log('numero di caratteri: ', charNumber);

const noSpacesCharNumber = textUtlities.getCharNumberWithoutSpaces(fileData);
console.log('numero di caratteri spazi esclusi: ', noSpacesCharNumber);

const wordNumber = textUtlities.getWordNumberFromString(fileData);
console.log('numero di parole: ', wordNumber);

let occurrence = -1;
if (searchWord) {
  occurrence = textUtlities.getOccurrenceOfWordInString(searchWord, fileData)
}

if (occurrence >= 0) {
  console.log('la parola "' + searchWord + '" appare ' + occurrence + (occurrence === 1 ? ' volta' : ' volte'));
}

const report = textUtlities.createReportString(fileData, searchWord, charNumber, noSpacesCharNumber, wordNumber, occurrence);

inputOutput.writeReportinFile(outputUrl, report);


const contenitore = new Map() ///// una mappa è come un oggetto

contenitore.set(3, 'ciao')
contenitore.get(3)
contenitore.set('33 trentini', 42);
console.log(contenitore.get('33 trentini'));
console.log(contenitore.keys());
console.log(contenitore.values());

