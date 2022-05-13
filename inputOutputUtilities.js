const fileSystem = require('fs');


function readFileDataWithUrl(inputUrl) {
    let fileData;
    try {
        fileData = fileSystem.readFileSync(inputUrl, 'utf8')
    } catch (error) {
        console.log('Errore nella lettura del file\n', error.message);
        process.exit()
    }
    return fileData
}


function writeReportinFile(outputUrl,report) {
    try {
        fileSystem.writeFileSync(outputUrl, report);
    } catch (error) {
        console.log('Errore nella scrittura del file\n', error.message);
        process.exit()
    }
    
}


exports.readFileDataWithUrl = readFileDataWithUrl;
exports.writeReportinFile = writeReportinFile;