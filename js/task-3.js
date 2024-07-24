const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener("input", greetName);

function greetName() {
    const newName = nameInput.value.trim()

	if (newName === '') {
		nameOutput.textContent = 'Anonymous'
	} else {
		nameOutput.textContent = newName
	}
}