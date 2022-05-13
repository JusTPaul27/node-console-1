///1) Importo fs

const fileSystem = require('fs');


///2) mi leggo gli argomenti inseriti da console

const args = process.argv.slice(2); ////siccome i primi due comandi di "argv" li ignoriamo e usiamo slice



///3) prendo il primo elemento come inputUrl(obbligatorio), il secondo come outputUrl(obbligatorio) e il terzo come parola da cercare (non obbligatoria ) 

let inputUrl;

if (args[0]) {
    inputUrl = args[0]
} else {
    console.error('Devi inserire un input url');
    process.exit();
}

let outputUrl;

if (args[1]) {
    outputUrl = args[1]
} else {
    console.error('Devi inserire un output url');
    process.exit();
}

let searchWord = args[2] // non essendo obbligatoria non metto una formula

// console.log('input ', inputUrl)
// console.log('output ', outputUrl)
// console . log('Search word ', searchWord)


///4) leggo il container del file e loggo il numero di carattere spazi compresi e il numero di caratteri spazi esclusi

let fileData;

try {
fileData = fileSystem.readFileSync(inputUrl, 'utf8')    
} catch (error) {
    console.log('Errore nella lettura del file\n', error.message);
    process.exit()
}

console.log('Testo da analizzare: ', fileData)
/////il numero di caratteri spazi compresi
const charNumber = fileData.length;
console.log('Numero di caratteri: ', charNumber);

////il numero di caratteri spazi esclusi
const noSpaceData = fileData.replaceAll(' ', '');
const noSpaceCharNumber = noSpaceData.length
console.log('Numero di caratteri spazi esclusi: ', noSpaceCharNumber)

//// il numero delle parole
const cleanData = fileData.replaceAll("'", " ")
                          .replaceAll("!", "")
                          .replaceAll(",", "")
                          .replaceAll(".", "")
                          .replaceAll("?", "");
            
const wordArray = cleanData.split(" ");
const wordNumber = wordArray.length;
console.log('Numero di parole: ', wordNumber)

/// il numero delle occorrenze della parola da cercare, se la ho(non è obbligatoria);


let occurenceString = '';

if (searchWord) {  ///////se searchWord è presente
    let occurence = 0;
    for (const word of wordArray) {
        if (word.toLowerCase() === searchWord.toLocaleLowerCase()) { /////in questo modo includiamo anche le minuscole
            occurence++;
        }
    }
    console.log('La parola "' + searchWord + '" viene ripetuta ' + occurence + (occurence === 1 ? ' volta' : ' volte'))
    occurenceString = ('La parola "' + searchWord + '" viene ripetuta ' + occurence + (occurence === 1 ? ' volta' : ' volte'))
} else{
    console.log('Non hai cercato nessuna parola da conteggiare')
    occurenceString = ('Non hai cercato nessuna parola da conteggiare')
}



///5) se l'utente ha inserito l'outputUrl scrivere un nuovo file con il testo dell'originale + i dati dell'analisi

const newFileData = fileData + '\n' +
                    '\n' +
                    'Numero di caratteri: '+ charNumber + '\n' +
                    'Numero di caratteri spazi esclusi: '+ noSpaceCharNumber + '\n' +
                    'Numero di parole: '+ wordNumber + '\n' +
                    occurenceString;




try {
    fileSystem.writeFileSync(outputUrl, newFileData);
} catch (error) {
    console.log('Errore nella scrittura del file\n', error.message);
    process.exit()
}

//es originale => viva il css!
// risultato =>
//viva il css!
//
//numero di caratteri: 12
//numero di caratteri(spazi esclusi): 10

//


