let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', async (e) => {
	e.preventDefault();
	await loadLyrics();
	document.querySelector('.song-title-input').value = '';
	document.querySelector('.artist-name-input').value = '';
});

async function loadLyrics() {
	let songTitle = document.querySelector('.song-title-input').value;
	let artistName = document.querySelector('.artist-name-input').value;

	let response = await fetch(`https://api.lyrics.ovh/v1/${songTitle}/${artistName}`);
	console.log(response.status);
	let data = await response.json();
	console.log(data.lyrics);
	renderLyrics(data.lyrics);
}

function renderLyrics(lyrics) {
	document.querySelector('.lyrics').innerText = lyrics;
}
