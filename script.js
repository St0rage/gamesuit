function pilComp() {
	const comp = Math.random()
	if (comp < 0.34) return 'batu';
	if (comp >= 0.34 && comp < 0.67) return 'gunting';
	return 'kertas';
}

function getHasil(comp, player) {
	const hasil = document.querySelector('.hasill img');

	if (player == comp) return hasil.setAttribute('src', 'img/seri.png');
	if (player == 'batu') return (comp == 'gunting') ? hasil.setAttribute('src', 'img/menang.png') : hasil.setAttribute('src', 'img/kalah.png');
	if (player == 'gunting') return (comp == 'batu') ? hasil.setAttribute('src', 'img/kalah.png') : hasil.setAttribute('src', 'img/menang.png');
	if (player == 'kertas') return (comp == 'gunting') ? hasil.setAttribute('src', 'img/kalah.png') : hasil.setAttribute('src', 'img/menang.png');
}
function score() {
	const hasil = document.querySelector('.hasill img');
	const score1 = document.getElementById('pscore');
	const score2 = document.getElementById('compscore');
	let x = hasil.getAttribute('src');

	if (x == 'img/menang.png') {
		return score1.innerHTML = (nilai1 += 1);
	}else if (x == 'img/kalah.png') {
		return score2.innerHTML = (nilai2 += 1);
	}else {
		return score;
	}
}
let nilai1 = 0;
let nilai2 = 0;
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pill) {
	pill.addEventListener('click', function() {
		const pilihanComputer = pilComp();
		const pilihanPlayer = pill.className;
		const hasill = getHasil(pilihanComputer, pilihanPlayer);
		// console.log('comp ' + pilihanComputer);
		// console.log('player ' + pilihanPlayer);

		const imgComp = document.querySelector('.pilkomm img');
		imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
		score(nilai1, nilai2);
	});
});
