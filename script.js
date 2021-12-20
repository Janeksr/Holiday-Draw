const bill = document.querySelector('img');
const aswerArea = document.querySelector('.answer');
const answers = [
	'Więc klasycznie, piękne, spiczaste Tatry 🧗🏼',
	'Pszeniczne, IPA, może APA? 🍺 Beskid Żywiecki!',
	'Gorce - spokojne miejsce bez turystów 😌',
	'Pamiętaj, żeby w Pieninach zrobić kółko wokół jeziora Czorsztyńskiego 🚵🏼',
	'Bieszczady, najpiękniejsze jesienią 🍂 🍁',
	'Góy Sowie? Na weekndowy spacerek 🦉',
	'Mało kto o nich słyszał, góry Izerskie 🤫',
	'Piękne skaliste zbocza? A więc Karkonosze ⛰',
	'Jedyne w polsce góry płytowe - Góry Stołowe ',
	'Beskid Śląski? Warto zimą na narty ⛷',
	// 'Możesz na to liczyć',
];
const answersLength = answers.length;
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
