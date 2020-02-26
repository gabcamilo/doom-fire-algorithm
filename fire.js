const firePixelsArary = [];
const fireWidth = 10;
const fireHeight = 10;

function start(){
	createFireDataStructure();
	createFireSource();
	renderFire();
}

function createFireDataStructure() {
	const numberOfPixels = fireWidth * fireHeight;
	for(let i = 0; i < numberOfPixels; i++){
		firePixelsArary[i]=0;
	}
}

function createFirePropagation() {
	
}

function renderFire() {
	let html = '<table cellpadding=0 cellspacing=0>';
	for (let row = 0; row < fireHeight; row++) {
		html += '<tr>';
		for (let column = 0; column < fireWidth; column++) {
			const pixelIndex = column + (fireWidth * row);
			const fireIntensity = firePixelsArary[pixelIndex];
			html += '<td>';
			html += `<div class="pixel-index">${pixelIndex}</div>`;
			html += fireIntensity;
			html += '</td>';
		}
		html += '</tr>';
	}
	html += '</table>';
	document.querySelector('#fireCanvas').innerHTML = html;
}

function createFireSource() {
	for (let column = 0; column <= fireWidth; column++) {
		const overflowPixelIndex = fireWidth * fireHeight;
		const pixelIndex = (overflowPixelIndex - fireWidth) + column;
		firePixelsArary[pixelIndex] = 36
	}
}

start();
