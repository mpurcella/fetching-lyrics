let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
	loadLyrics();
});

async function loadLyrics() {
	let songTitle = document.querySelector('.song-title-input').value;
	let artistName = document.querySelector('.artist-name-input').value;

	try {
		let response = await fetch(`https://api.lyrics.ovh/v1/${songTitle}/${artistName}`);
		let data = await response.json();
		renderLyrics(data.lyrics);
		clearInputs();
	} catch (error) {
		console.log('Error: ' + error);
	}
}

function renderLyrics(lyrics) {
	document.querySelector('.lyrics').innerText = lyrics;
}

function clearInputs() {
	let songTitleInput = document.querySelector('.song-title-input');
	let artistNameInput = document.querySelector('.artist-name-input');

	songTitleInput.value = '';
	artistNameInput.value = '';
}
