var storage = require('./localstorage');
var state = storage.get('state') || {};
window.less.modifyVars(state);

function lessInputs(inputs) {
	inputs.forEach(function(input) {
		if (state[input.id]) input.value = state[input.id];
		input.addEventListener('input', updateLessVariable, false);
	});
}

function updateLessVariable() {
	state = types[this.type](this, state);
	window.less.modifyVars(state);
	storage.set('state', state);
}

var types = {
	'text': text
};

function text(input, state) {
	state[input.id] = input.value;
	if (state[input.id] === "") delete state[input.id];
	return state;
}

module.exports = lessInputs;
