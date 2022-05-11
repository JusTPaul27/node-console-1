const fs = require('fs');


// function readCsv() {
//   try {
//     const data = fs.readFileSync('./libro.csv', 'utf8');
//     console.log(data);
//   } catch (err) {
//     throw err;
//   }
// }


// try {
//   readCsv()
// } catch (error) {
//   console.log('la funzione non funziona')
// }
  let data;

  try {
    data = fs.readFileSync('./libri.csv', 'utf8');
  } catch (err) {
    console.log('file non trovato');
  }

  // let pippo = {nome: "pippo", dob: 2021};

  // console.log(pippo['nome']);

  // pippo['cognome'] = 'de pippis';

  // console.log(pippo.cognome);

  
  ////
  //1) spezzare la nostra stringa in un array di linee.
  //let lines = ["title,author,price,copies", "iliade,omero,15.00,5", "odissea,omero,12.00,3", "i promessi sposi,manzoni,20.00,10"];
  //2) creo una variabile chiamata properties che conterrà un array con le parole di cui è composta la prima linea;
  //const properties = ["title", "author", "price", "copies"]
  //let lines = ["iliade,omero,15.00,5", "odissea,omero,12.00,3", "i promessi sposi,manzoni,20.00,10"];
  //3) creo un array vuoto per gli oggetti
  //4) faccio un ciclo su tutte le linee dentro lines
  /////- creo un nuovo oggetto vuoto.
  /////- trasformo la linea in un array di parole es: const lineArray = ["iliade", "omero", "15.00", "5"];
  /////- faccio un ciclo interno per ogni parola dentro properties
  /////- aggiungo al nuovo oggetto una proprietà con il nome della proprietà e associando il valore corrispondete nella linea;
  /////- infilo il mio oggetto nell'array vuoto
  //5) faccio console.log dell'array

  console.log(data);



  