// const ourDivs = document.getElementsByClassName('div');

// for (const ourDiv of ourDivs) {
// 	ourDiv.style['background-color'] = 'black';
// 	ourDiv.style.height = '100px';
// 	ourDiv.style.width = '100px';
// }

// function firstHandler() {
// 	for (const ourDiv of ourDivs) {
// 		ourDiv.style.display = 'none';
// 	}
// }

// function secondHandler() {
// 	const divsCount = ourDivs.length;
// 	for (let i = 0; i < divsCount; i++) {
// 		ourDivs[0].remove();
// 	}
// }

// function thirdHandler() {
// 	for (const ourDiv of ourDivs) {
// 		revertVisibility(ourDiv);
// 	}
// }

// const revertVisibility = (elementToHide) => {
// 	if (elementToHide) {
// 		if (elementToHide.style.visibility === 'hidden') {
// 			elementToHide.style.visibility = 'visible';
// 			return;
// 		}

// 		elementToHide.style.visibility = 'hidden';
// 	}
// };

// function inputHandler() {
// 	const idOfElement = document.getElementById('inputForQS').value;
// 	const elementToHide = document.getElementById(idOfElement);
// 	revertVisibility(elementToHide);
// }

// // task 5
// let clickCounter = 0;
// const div = document.createElement('div');
// div.style['margin-top'] = '30px';
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.background = 'yellow';
// document.body.appendChild(div);

// const switcher = () => {
// 	console.log()
// 	if (clickCounter === 0) {
// 		alert("hello")
// 		clickCounter++;
// 	} else {
// 		div.remove();
// 	}
// }
// div.addEventListener('click', switcher);

// // task 6
// const button = document.createElement('button');
// button.style['margin-top'] = '30px';
// button.innerHTML = "focus"
// const div2 = document.createElement('div');
// div2.style['margin-top'] = '30px';
// div2.style.width = '50px';
// div2.style.height = '50px';
// div2.style.background = 'red';
// button.onmouseover = () => {document.body.appendChild(div2);}
// button.onmouseout = () => {div2.remove()}
// document.body.appendChild(button);

// // task 7
// const div3 = document.createElement('div');
// div3.style['margin-top'] = '30px';
// div3.style.width = '50px';
// div3.style.height = '20px';
// div3.style.background = 'green';

// const input = document.createElement('input');
// input.style['margin-top'] = '30px';
// input.onfocus = () => {document.body.appendChild(div3);}
// input.oninput = () => {div3.remove()}
// document.body.appendChild(input);

// // task 8
// const input2 = document.createElement('input');
// input2.style['margin-top'] = '30px';
// document.body.appendChild(input2);
// const img = document.createElement('img');
// const button2 = document.createElement('button');
// button2.style['margin-top'] = '30px';
// button2.innerHTML = "load img";
// document.body.appendChild(button2);
// button2.onclick = () => {
// 	img.src = input2.value;
// }
// document.body.appendChild(img);

// // task 9
// const textArea = document.createElement('textarea');
// textArea.style['margin-top'] = '30px';
// document.body.appendChild(textArea);
// const button3 = document.createElement('button');
// button3.style['margin-top'] = '30px';
// button3.innerHTML = 'load images';
// document.body.appendChild(button3);
// button3.onclick = () => {
// 	textArea.value.split('\n').forEach((imgRef) => {
// 		const img = document.createElement('img');
// 		img.src = imgRef;
// 		document.body.appendChild(img);
// 	});
// };

// // task 10 - 12
// const coordinatesDiv = document.createElement('div');
// coordinatesDiv.id = 'coordinatesDiv';
// coordinatesDiv.style.position = 'absolute';
// coordinatesDiv.style.right = 0;
// coordinatesDiv.style.top = 0;
// coordinatesDiv.style.width = '290px';
// coordinatesDiv.style.height = '190px';
// coordinatesDiv.style.background = 'green';
// const lang = `language: ${navigator.language}`;
// let geoPosition = 'waiting for confirmation of geolocation <br />';
// getGeoPosition();
// document.body.appendChild(coordinatesDiv);

// document.onmousemove = handleMouseMove;
// function handleMouseMove(event) {
// 	const x = event.clientX;
// 	const y = event.clientY;
// 	const text = `${geoPosition} ${lang} <br /> X: ${x}, Y: ${y}`;
// 	document.getElementById('coordinatesDiv').innerHTML = text;
// }

// function getGeoPosition() {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition((position) => {
// 			const { latitude, longitude } = position.coords;
// 			geoPosition = `Ш: ${latitude}, <br /> Д: ${longitude} <br>`;
// 		});
// 		return;
// 	}

// 	geoPosition = 'Geolocation is not supported by this browser.';
// }
