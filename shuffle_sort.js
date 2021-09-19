var shuffleAndSortObj = (function shuffleAndSort() {
	const arrayObj = [
		{ text: 1, class: "colorGrp1" },
		{ text: 2, class: "colorGrp2" },
		{ text: 3, class: "colorGrp3" },
		{ text: 4, class: "colorGrp2" },
		{ text: 5, class: "colorGrp3" },
		{ text: 6, class: "colorGrp4" },
		{ text: 7, class: "colorGrp4" },
		{ text: 8, class: "colorGrp1" },
		{ text: 9, class: "colorGrp3" },
	];
	function shuffle() {
		let ctr = arrayObj.length;
		let temp;
		let index;

		// While there are elements in the array
		while (ctr > 0) {
			// Pick a random index
			index = Math.floor(Math.random() * ctr);
			// Decrease ctr by 1
			ctr--;
			// And swap the last element with it
			temp = arrayObj[ctr];
			arrayObj[ctr] = arrayObj[index];
			arrayObj[index] = temp;
		}
		render(arrayObj);
	}
	function sort() {
		arrayObj.sort(function (x, y) {
			return x.text - y.text;
		});
		render(arrayObj);
	}
	function render(arrayObj) {
		document.getElementById("shuffle").innerHTML = "";
		for (var i = 0; i < arrayObj.length; i++) {
			var card = document.createElement("li");
			card.className = "card " + arrayObj[i].class;
			card.innerHTML = arrayObj[i].text;
			document.getElementById("shuffle").appendChild(card);
		}
	}
	return {
		shuffle,
		sort,
	};
})();
function load() {
	shuffleAndSortObj.sort();
}
window.onload = load;
