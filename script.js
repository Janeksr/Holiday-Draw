const bill = document.querySelector('img');
const aswerArea = document.querySelector('.answer');
const answers = [
	'Więc klasycznie, piękne, spiczaste Tatry 🧗🏼',
	'Pszeniczne, IPA, może APA? 🍺 Beskid Żywiecki!',
	'Gorce - spokojne miejsce bez turystów 😌',
	'Pamiętaj, żeby w Pieninach zrobić kółko wokół jeziora Czorsztyńskiego 🚵🏼',
	'Bieszczady, najpiękniejsze jesienią 🍂 🍁',
	'Góy Sowie? Na weekndowy spacerek 🦉',
	// 'Nie teraz',
	// 'YES, YES, YES',
	// 'To musi poczekać',
	// 'Mam pewne wątpliwości',
	// 'Możesz na to liczyć',
	// 'Zbyt wcześnie aby powiedzieć',
	// 'Daj spokój',
	// 'Absolutnie',
	// 'Chyba żartujesz?',
	// 'Na pewno nie',
	// 'Zrób to',
	// 'Prawdopodobnie',
	// 'Dla mnie rewelacja',
	// 'Na pewno tak',
];

let answersLength = answers.length;
let countAnswers = 0;

const random = () => {
	if (countAnswers < answersLength) {
		const random = Math.floor(Math.random() * answers.length);
		aswerArea.innerHTML = `<span>${answers[random]}</span>`;
		answers.splice(random, 1);
	} else {
		aswerArea.innerHTML = `<span>To już wszystkie moje propozycje 😄</span>`;
	}
	countAnswers++;
};

bill.addEventListener('click', () => {
	bill.classList.add('shake-animation');
	setTimeout(() => {
		bill.classList.remove('shake-animation');

		random();
	}, 1000);
});
