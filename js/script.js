/*Passaggi:
1. Salvare in 3 variabili il nome, i chilometri da percorrere e la fascia d'età.
2. Calcolare il prezzo del biglietto intero.
3. Appliccare lo sconto se soddisfa le condizioni dell'età.
4. Generare numero della carrozza e il numero del biglietto.
5. Visualizzare nella pagina il nome, il tipo di biglietto ( con o senza sconto appliccato), numero della carrozza, il numero del biglietto, il prezzo del biglietto intero e/o il prezzo del biglietto scontato.
*/

let ticketPrice;
let totalTicketPrice;
let ticketType;
let ticketGenerated;
let ticketNumber;
let wagon;
const seniorDiscount = (40 / 100);
const minorDiscount = (20 / 100);
const generate = document.getElementById('btn-generate'); 
const reset = document.getElementById('btn-reset'); 
const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const inputAgeRange = document.getElementById('input-age-range');
const generatedTicket = document.querySelector('.generated-ticket');
 


// Funzione in attesa del click e genera i dettagli del biglietto
generate.addEventListener('click', function(){
	
	// Salva in 3 variabili il nome, i chilometri da percorrere e la fascia d'età
	const pName = inputName.value;
	const km = inputKm.value;
	const age = inputAgeRange.value;
	
	// Calcola il prezzo del biglietto intero
	ticketPrice = (km * 0.21);
	totalTicketPrice = ticketPrice;
	ticketType = 'Biglietto standard';

	// Applicca lo sconto se soddisfa le condizioni dell'età
	if (age == 'minorenne') {
		totalTicketPrice *= (1 - minorDiscount);
		ticketType = 'Sconto 20% under 18';
		} else if (age == 'anziano') {
		totalTicketPrice *= (1 - seniorDiscount);
		ticketType = 'Sconto 40% over 65';
	}

	// Genera numero della carrozza e il numero del biglietto
	wagon = Math.floor((Math.random() * 10) + 1);
	ticketNumber = Math.floor((Math.random() * (100000 - 90000) + 90000 ) );
	
	// Visualizza nella pagina i corrispettivi variabili
	document.getElementById('output-name').innerHTML = pName.toUpperCase();
	document.getElementById('output-ticket-type').innerHTML = ticketType;
	document.getElementById('output-wagon').innerHTML = wagon;
	document.getElementById('output-ticket-number').innerHTML = ticketNumber;
	document.getElementById('output-ticket-price').innerHTML = '€' + ticketPrice.toFixed(2);
	document.getElementById('output-total-ticket-price').innerHTML = '€' + totalTicketPrice.toFixed(2) + '  anziché  ';

	// Visualizza il prezzo scontato se ticketType == 'Sconto over 65' || ticketType == 'Sconto under 18'
	const tTPVisible = document.querySelector('#output-total-ticket-price');
	const priceBar = document.querySelector('#output-ticket-price');
	if (ticketType == 'Sconto 40% over 65' || ticketType == 'Sconto 20% under 18') {
		tTPVisible.classList.remove('d-none');
		priceBar.classList.add('text-decoration-line-through');
	} else {
		tTPVisible.classList.add('d-none');
		priceBar.classList.remove('text-decoration-line-through');
	}
	generatedTicket.classList.remove('d-none');
	console.log(pName);
	console.log(km);
	console.log(age);
	console.log(ticketPrice);
	console.log(totalTicketPrice);
	console.log(ticketType);
});

reset.addEventListener('click', function(){
	const pName = '';
	const km = '';
	const age = '';

	inputName.value = pName;
	inputKm.value = km;
	inputAgeRange.value = age;
	generatedTicket.classList.add('d-none');
})