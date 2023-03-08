var input = document.getElementById('result');

function insert(value) {
	input.value += value;
}

function calculate() {
	var result = eval(input.value);
	input.value = result;
}

function clear() {
	input.value = '';
}
