var input = document.getElementById('result');

function insert(value) {
	input.value += value;
}

function calculate() {
	try {
		var result = eval(input.value);
		if (isNaN(result)) {
			input.value = 'Error';
		} else {
			input.value = result;
		}
	} catch (error) {
		input.value = 'Error';
	}
}

function clearInput() {
	input.value = '';
}
