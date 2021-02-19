// tasks 1-4
const ourDivs = document.getElementsByClassName('div');

for (const ourDiv of ourDivs) {
	ourDiv.style['background-color'] = 'black';
	ourDiv.style.height = '100px';
	ourDiv.style.width = '100px';
}

function firstHandler() {
	for (const ourDiv of ourDivs) {
		ourDiv.style.display = 'none';
	}
}

function secondHandler() {
	const divsCount = ourDivs.length;
	for (let i = 0; i < divsCount; i++) {
		ourDivs[0].remove();
	}
}

function thirdHandler() {
	for (const ourDiv of ourDivs) {
		revertVisibility(ourDiv);
	}
}

const revertVisibility = (elementToHide) => {
	if (elementToHide) {
		if (elementToHide.style.visibility === 'hidden') {
			elementToHide.style.visibility = 'visible';
			return;
		}

		elementToHide.style.visibility = 'hidden';
	}
};

function inputHandler() {
	const idOfElement = document.getElementById('inputForQS').value;
	const elementToHide = document.getElementById(idOfElement);
	revertVisibility(elementToHide);
}

// task 5
let clickCounter = 0;
const div = document.createElement('div');
div.style['margin-top'] = '30px';
div.style.width = '100px';
div.style.height = '100px';
div.style.background = 'yellow';
document.body.appendChild(div);
div.onclick = () => {
	clickCounter++;
	if (clickCounter > 1) {
		div.style.visibility = "hidden"
	} else {
		alert('hello');
	}
};

// task 6
const button = document.createElement('button');
button.style['margin-top'] = '30px';
button.innerHTML = "focus"
const div2 = document.createElement('div');
div2.style['margin-top'] = '30px';
div2.style.width = '50px';
div2.style.height = '50px';
div2.style.background = 'red';
button.onmouseover = () => {document.body.appendChild(div2);}
button.onmouseout = () => {div2.remove()}
document.body.appendChild(button);


// task 7
const div3 = document.createElement('div');
div3.style['margin-top'] = '30px';
div3.style['margin-left'] = '100px';
div3.style.width = '50px';
div3.style.height = '20px';
div3.style.background = 'green';

const input = document.createElement('input');
input.style['margin-top'] = '100px';
input.style['margin-left'] = '100px';
input.onfocus = () => {document.body.appendChild(div3);}
input.oninput = () => {div3.remove()}
document.body.appendChild(input);


// task 8
const input2 = document.createElement('input');
input2.style['margin-top'] = '30px';
document.body.appendChild(input2);
const img = document.createElement('img');
const button2 = document.createElement('button');
button2.style['margin-top'] = '30px';
button2.innerHTML = "load img";
document.body.appendChild(button2);
button2.onclick = () => {
	img.src = input2.value;
}
document.body.appendChild(img);

// task 9
const input3 = document.createElement('input');
input3.style['margin-top'] = '30px';
input3.id = 'imageRefs';
document.body.appendChild(input3);

const textArea = document.createElement('textarea');
textArea.style['margin-top'] = '30px';
textArea.id = 'imageRefs';

input3.replaceWith(textArea);

const button3 = document.createElement('button');
button3.style['margin-top'] = '30px';
button3.innerHTML = 'load images';
document.body.appendChild(button3);
button3.onclick = () => {
	document.getElementById("imageRefs").value.split('\n').forEach((imgRef) => {
		const img = document.createElement('img');
		img.src = imgRef;
		document.body.appendChild(img);
	});
};

// task 10 - 12
const coordinatesDiv = document.createElement('div');
coordinatesDiv.id = 'coordinatesDiv';
coordinatesDiv.style.position = 'absolute';
coordinatesDiv.style.right = 0;
coordinatesDiv.style.top = 0;
coordinatesDiv.style.width = '490px';
coordinatesDiv.style.height = '190px';
coordinatesDiv.style.background = 'green';
const lang = `language: ${navigator.language}`;
let geoPosition = 'you need to allow browser to check your location <button onclick="getGeoPosition()">allow geolocation</button> <br/>';
getGeoPosition();
document.body.appendChild(coordinatesDiv);

document.onmousemove = (event) => {
	const x = event.clientX;
	const y = event.clientY;
	const text = `${geoPosition} ${lang} <br /> mouse X: ${x}, mouse Y: ${y}`;
	document.getElementById('coordinatesDiv').innerHTML = text;
}

function getGeoPosition() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			geoPosition = `Ш: ${latitude}, <br /> Д: ${longitude} <br/>`;
		});
		return;
	}

	geoPosition = 'Geolocation is not supported by this browser.';
}

// task 13
function createBlock(blockName, onKeyUpFunc) {
	const block = document.createElement('div');
	block.id = blockName;
	block.contentEditable = true;
	block.style.width = '150px';
	block.style.height = '100px';
	block.style.background = 'green';
	block.style['margin-bottom'] = '10px';
	block.onkeyup = onKeyUpFunc;
	document.body.appendChild(block);
	return block;
}

// function setCookie(cname, cvalue, minutesCount) {
// 	const d = new Date();
// 	d.setTime(d.getTime() + minutesCount * 60 * 1000);
// 	const expires = 'expires=' + d.toUTCString();
// 	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
// }

// const block1 = createBlock('block1', () => {
// 	localStorage.setItem('block1', block1.textContent);
// });

// const block2 = createBlock('block2', () => {
// 	setCookie('block2', block2.textContent, 15);
// });

// const block3 = createBlock('block3', () => {
// 	sessionStorage.setItem('block3', block3.textContent);
// });

// window.onload = () => {
// 	block1.textContent = localStorage.getItem('block1');
// 	block3.textContent = sessionStorage.getItem('block3');

// 	const cookieValue = document.cookie
// 	.split('; ')
// 	.find(row => row.startsWith('block2='))
// 	.split('=')[1];
// 	block2.textContent = cookieValue;
// };

// // task 14
// const scrollToTopBtn = document.createElement('button');
// scrollToTopBtn.innerText = 'go up';
// scrollToTopBtn.style.position = 'fixed';
// scrollToTopBtn.style.display = 'none';
// scrollToTopBtn.style.bottom = '20px';
// scrollToTopBtn.style.right = '30px';
// scrollToTopBtn.style['z-index'] = 99;
// scrollToTopBtn.style['background-color'] = 'white';
// scrollToTopBtn.style.cursor = 'pointer';
// scrollToTopBtn.onclick = () => {
// 	scrollToTop();
// };
// document.body.appendChild(scrollToTopBtn);

// const scrollToTop = () => {
// 	const c = document.documentElement.scrollTop || document.body.scrollTop;
// 	if (c > 0) {
// 		window.requestAnimationFrame(scrollToTop);
// 		window.scrollTo(0, c - c / 8);
// 	}
// };

// window.onscroll = function () {
// 	showScrollButton();
// };

// function showScrollButton() {
// 	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
// 		scrollToTopBtn.style.display = 'block';
// 	} else {
// 		scrollToTopBtn.style.display = 'none';
// 	}
// }

//task 15
