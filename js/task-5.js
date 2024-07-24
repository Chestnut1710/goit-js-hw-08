function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color')
const bodyElement = document.body
const colorSpan = document.querySelector('.color')

buttonChangeColor.addEventListener('click', function () {
	const randomColor = getRandomHexColor()
	bodyElement.style.backgroundColor = randomColor
	colorSpan.textContent = randomColor
})