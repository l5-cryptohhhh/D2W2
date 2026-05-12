/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/


/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
    nome: 'Manuel',
    cognome: 'Nunziata',
    eta: 21,
    citta: 'Latina',
};

console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vivo a ${persona.citta}`);


/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
persona.email = 'nunziatamanuel5@gmail.com';
delete persona.eta;

console.log(persona);




/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
    nome: 'Manuel',
    cognome: 'Nunziata',
    indirizzo: {
        via: 'Alessandro Manzoni',
        cap: '04100',
        provincia: 'Latina'
    }
}

console.log(utente.indirizzo.cap);


/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const chiave = 'nome';

console.log(persona[chiave]);



/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 13;
const b = 24;
const c = 19;

if (a === b && b === c) {
    console.log('Pareggio');
} else if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}


/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totale = 45;
const spedizione = 9.90;

if (totale >= 50) {
    console.log(`Totale Carrello ${totale}$ - Spedizione gratuita - Totale finale: ${totale}$`);
} else {
    console.log(`Totale carrello ${totale}$ - Spedizione ${spedizione}$ - Totale finale: ${totale + spedizione}$`);
}



/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [42, 'ciao', true];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        console.log(`${array[i]} è un numero `);
    } else {
        console.log(`${array[i]} non è un numero`);
    }
}


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];

numeri.push(1, 2, 3, 4, 5);
numeri.unshift(0);

console.log(numeri);
console.log(numeri.length);


/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const carrello = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];


carrello.splice(1, 1);
console.log(carrello);

carrello.splice(1, 0, 'Diario');
console.log(carrello);




/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = ['Penna', 'Quaderno', 'Zaino'];
const cercato = 'Zaino';

console.log(`${cercato} è in carrello: ${prodotti.includes(cercato)}`);

const indice = prodotti.indexOf(cercato);
if (indice !== -1) {
    console.log(`${cercato} in posizione: ${indice}`);
} else {
    console.log('Non in carrello');
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utenti = [
    { nome: 'Manuel', eta: 21 },
    { nome: 'Luca', eta: 30 },
    { nome: 'Antonio', eta: 26}
];

for (let i=0; i < utenti.length; i++) {
    console.log(`${utenti[i].nome} (${utenti[i].eta} anni)`);
}

console.table(utenti);


/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const product = [
    { nome: 'Penna', prezzo: 2, disponibile: true},
    { nome: 'Zaino', prezzo: 35, disponibile: true},
    { nome: 'Quaderno', prezzo: 7, disponibile: false},
    { nome: 'Astuccio', prezzo: 12, disponibile: true},
];

for (let i = 0; i < product.length; i++) {
    const p = product[i];

    if (p.disponibile && p.prezzo < 10) {
        console.log(`OFFERTA: ${p.nome} (${p.prezzo}$)`);
    } else if (p.disponibile && p.prezzo >= 10) {
        console.log(`${p.nome} - ${p.prezzo}$`);
    } else {
        console.log(`${p.nome} - esaurito`);
    }
}


/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */














