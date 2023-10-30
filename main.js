// JavaScript è un linguaggio a tipizzazione debole

// Java è un linguaggio a tipizzazione forte

// In informatica esistono 2 tipi di linguaggi di programmazione:

// -  Linguaggio Compilato:
    // Lui legge la riga di codice, la compila in un file chiamato eseguibile dal processore, passa alla prossima riga, la legge, la compila e infine se non trova errori, esegue il programma, altrimenti ci restituisce l'errore.

// -  Linguaggio Interpretato:
    // è un linguaggio che durante l'esecuzione dell'algoritmo, legge la riga di codice e se non trova erroi la esegue, passa alla prossima e la esegue, e così via.
    // Se trova errori interrompe l'esecuzione, ma comunque ha letto tutto il codice.

//  Il compilato termina quando trova l'errore nel codice, e non esegue il file eseguibile.

// L'interpretato legge comunque tutto il codice e poi restituisce l'errore.

// Secondo voi JavaScript che tipo di linguaggio è? Nessuno dei due
// Compilato Just In Time - prende il meglio dai due linguaggi.

// metodo log della console che si chiama console.log()
// tutti i metodi hanno le parentesi tonde

// il colore blu in console rappresenta un numero
// il colore nero in console rappresenta una stringa

// Logica Computazionale -> logica che segue i principi relativi alla macchina

// LOCAZIONI DI MEMORIA:
// - Variabili
// - Costanti

// - La variabile è una locazione di memoria che mi permette di riassegnare un dato al suo interno
// - La costante è una locazione di memoria che non mi permette di riassegnare un dato al suo interno (PER ORA...(oggetti))


// come dichiaro una variabile?

// keyword + nome + assegnazione del valore + fine del mio statement

// var number = 12345;

// i nomi delle variabili vanno scritti con specifiche regole

// - se il nome ha più di una parola, ogni prima lettera di ogni parola va messa Maiuscola (Camel Case)
// var phoneNumber

// - il nome di una variabile non può avere spazi
// var phone number

// - non posso avere simboli strani, all'infuori di $ e di _
// var il_mio_numero (sintassi kebab)

// - non posso iniziare con un numero
// var 1number

// VAR NON SI USA PIù DAL 2015

// var numeroDiTelofono = 33333333;

// console.log(numeroDiTelofono);

// numeroDiTelofono = 'Ciao sono Valerio';

// console.log(numeroDiTelofono);

// var phoneNumber = 123456;


// var phoneNumber = 2222222;


// console.log(phoneNumber);


// LA keyword da utilizzare per dichiarare una variabile è LET

// let phoneNumber = 123456;


//     phoneNumber = 'Valerio';


// COSTANTI

// let n = 1;

// n = 10;

// console.log(n);

// il nome della costante va scritto tutto in maiuscolo non per legge, ma è una convenzione globalmente accettata

// const NUMBER = 1;

// NUMBER = 10;

// console.log(n);

// Prompt = metodo che permette tramite una finestrella nativa del browser di inserire un input, che posso o meno salvare all'interno di una locazione di memoria.

// const PARTITAIVA = prompt('Inserisci la tua partita iva');

// console.log(PARTITAIVA);

// PSEUDOCODICE
// - inizio a contare da 0 (n = 0)
// - devo contare fino a 5
// - devo stoppare quando il numero arriva a 5
// - per arrivare a 5, dovrei fare un'addizione
// - devo addizionare 1 + 1 + 1 + 1
// - forse mi serve un ciclo


// TIPI DI DATO
// - Primitivi
// - Non Primitivi, detti anche Strutturali

// - I primitivi sono immutabili, non possono trasformarsi, sono anche dati leggeri, non sono pesanti, la loro trasmissione è più veloce.

// - I non primitivi sono mutabili, possono trasformarsi, e sono pesanti, la loro trasmissione è più lenta.

// i tipi di dato primitivo, quali sono?
// - number (in JavaScript che comprendono quelli interi e quelli a virgola mobile)
// - string ('Ciao');
// - boolean (true e false)
// - undefined (dichiarazione di una variabile senza l'assegnazione di un valore)
// let number;
// console.log(number);
// - null 
// - symbol

// i non primitivi, quali sono?
// - oggetti


// let number = 'ciaone';

// typeof = operatore che mi permette di vedere quel dato di che tipo è

// console.log(typeof number);

// let number = 10 + 10;

// console.log(number);

// let number1 = 10;

// let number2 = 20;

// let somma = number2 + number1;

// let media = somma / 2;

// console.log(somma);

// console.log(media);

// -----------------------------------

// let string = 'Ciao';

// let number = 5;

// let divisione = string / number + 1000 * 1000 - 1000;

// console.log(divisione);

// Math = oggetto precostruito

// .round() mi arrotonda il numero a seconda del numero dopo la virgola.
// se il numero è < 5 per difetto - se il numero è >= 5 per eccesso

// let number = 10.8;

// let intero = Math.round(number);

// console.log(intero);

// .ceil() arrotonda sempre il numero per eccesso

// let number = 10.1;

// let intero = Math.ceil(number);

// console.log(intero);

// .floor() arrotonda sempre il numero per difetto

// let number = 10.9;

// let intero = Math.floor(number);

// console.log(intero);

// .random() genera un numero casuale tra 0 e 1 escluso

// let random = Math.random();

// console.log(random);


// let max = 1000;

// let min = 1;

// let random2 = (Math.random() * (max - min + 1) ) + min;

// console.log(random2);

// let max2 = 100;

// let min2 = 50;

// let random3 = Math.floor(Math.random() * (max2 - min2 + 1) ) + min2;

// toFixed() -> decreta quante cifre dopo la virgola mi devo fermare in un numero (esplorazione libera)

// .max() e .min() mi dicono il massimo e il minimo

// let a = 1;

// let b = 2;

// let c = 3;


// let massimo = Math.max(a, b, c);

// let minimo = Math.min(a, b, c);

// console.log(massimo);
// console.log(minimo);

// let number = 3.1465456644;

// let fixed = Number(number.toFixed(0));


// console.log(typeof number);
// console.log(fixed);

// il + è un overloading operator

// let number = 3.1465456644;

// let fixed = +number.toFixed(0);

// console.log(typeof number);
// console.log(fixed);

// come si eleva alla potenza?

// let number = 10;

// let potenza = number ** 10;

// console.log(potenza);


// % modulo = resto della divisione
//  se il valore del modulo è 0, il numero è pari
//  se il valore del modulo è 1, il numero è dispari

// let number = 11;

// let modulo = number % 2;

// console.log(modulo);

// STRINGHE

// '' o "" o `` backtick
// concatenazione delle stringhe +

// let string = "Ciao a tutti l'albero è bello";

// let age = 32;

// let string = "Ciao a tutti, sono Valerio ed ho " + age + " anni e l'albero";


// let string2 = `Ciao a tutti sono Valerio, l'albero è bellissimo ed ho ${age} anni`;

// console.log(string2);

// let age = 32;

// let string = `Ciao a tutti mi chiamo Valerio ed ho ${age} anni`;

// let string2 = `e sono un docente di Aulab`;

// let stringona = string + ' ' + string2;

// console.log(stringona);

// TYPE COERCION
// tra stringa e numero, con l'operatore + la stringa ha la priorità

// console.log(Number('5') + 5);

// tra stringa e numero, con l'operatore * il numero ha la priorità
// console.log('5' * 5);

// non sempre la type coercion va a buon fine
// console.log('Ciao' * 5);


// boolean

// let booleano = false;

// console.log(booleano);

// console.log(3 > 10);

// null = rappresenta l'assenza di un oggetto

// let und = undefined;

// let niend = null;

// console.log(typeof und);

// console.log(typeof niend);

// OPERATORI
// - unari typeof
// - binari
// - ternari l'operatore delle condizioni
// - operatori matematici
// - operatori di confronto

// console.log(typeof 10);

// 5 + 5

// => = freccettona

// console.log( 3 > 2);

// >= <=

// let valerio = 'nerd';
// il singolo = è assegnazione di valore

// operatore di uguaglianza

// == verifica se è uguale il valore
// === verifica il valore e il tipo di dato

// console.log( 5 === '5');

// console.log(3 >= '3');

// operatore NOT !

// console.log(5 !== '5');

// console.log(5 !> 5);

// console.log( ! (5 > 2));

// operatori logici
// && = and 
// || = or
