function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const boxesContainer = document.getElementById('boxes')
const input = document.querySelector('input')

createButton.addEventListener('click', function () {
	const amount = parseInt(input.value)

	if (amount >= 1 && amount <= 100) {
		destroyBoxes()
		createBoxes(amount)
		input.value = ''
	}
})


function createBoxes(amount) {
	let pxCount = 30;
  let htmlForBox = "";

  if (amount <= 100 && amount >= 1) {
    for (let i = 1; i <= amount; i += 1) {
      htmlForBox += `<div style="width: ${pxCount}px; height: ${pxCount}px; background-color: ${getRandomHexColor()};"></div>`;
      pxCount += 10;
    }
    boxesContainer.insertAdjacentHTML("beforeend", htmlForBox);
  }
}

destroyButton.addEventListener('click', destroyBoxes)

function destroyBoxes() {
	boxesContainer.innerHTML = ''
}