/*Passaggi:
1. Salvare in 3 variabili il nome, i chilometri da percorrere e la fascia d'età.
2. Calcolare il prezzo del biglietto intero.
3. Appliccare lo sconto se soddisfa le condizioni dell'età.
4. Generare numero della carrozza e il numero del biglietto.
5. Visualizzare nella pagina il nome, il tipo di biglietto ( con o senza sconto appliccato), numero della carrozza, il numero del biglietto, il prezzo del biglietto intero e/o il prezzo del biglietto scontato.
*/

let ticketPrice;
let totalTicketPrice;
let ticketType = 'Biglietto standard';
let ticketGenerated;
let ticketNumber;
let wagon;
const seniorDiscount = (40 / 100);
const minorDiscount = (20 / 100);
const generate = document.getElementById('btn-generate'); 
const  inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const inputAgeRange = document.getElementById('input-age-range');


// Funzione in attesa del click
generate.addEventListener('click', function(){
	
	// Salva in 3 variabili il nome, i chilometri da percorrere e la fascia d'età
	const pName = inputName.value;
	const km = inputKm.value;
	const age = inputAgeRange.value;
	
	// Calcola il prezzo del biglietto intero
	ticketPrice = (km * 0.21);
	totalTicketPrice = ticketPrice;

	// Applicca lo sconto se soddisfa le condizioni dell'età
	if (age == 'minorenne') {
		totalTicketPrice *= (1 - minorDiscount);
		ticketType = 'Sconto under 18';
		} else if (age == 'anziano') {
		totalTicketPrice *= (1 - seniorDiscount);
		ticketType = 'Sconto over 65';
	}

	// Genera numero della carrozza e il numero del biglietto
	wagon = Math.floor((Math.random() * 10) + 1);
	ticketNumber = Math.floor((Math.random() * 100000) + 1);

	// Salva i dati dentro la variabile 'ticketGenerated'
	ticketGenerated = `${pName}, ${ticketType}, carrozza: ${wagon}, Ticket Number: ${ticketNumber}, €${ticketPrice.toFixed(2)}, €${totalTicketPrice.toFixed(2)} `
	
	// Visualizza nella pagina la variabile 'ticketGenerated'
	document.getElementById('output-name').innerHTML = pName;
	document.getElementById('output-ticket-type').innerHTML = ticketType;
	document.getElementById('output-wagon').innerHTML = wagon;
	document.getElementById('output-ticket-number').innerHTML = ticketNumber;
	document.getElementById('output-ticket-price').innerHTML = ticketPrice.toFixed(2);
	document.getElementById('output-total-ticket-price').innerHTML = totalTicketPrice.toFixed(2);

	console.log(pName);
	console.log(km);
	console.log(age);
	console.log(ticketPrice);
	console.log(totalTicketPrice);
	console.log(ticketType);
});
