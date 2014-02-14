var storage = require('./localstorage');
var state = storage.get('state') || {};

exports.enable = function(inputs) {
	inputs.forEach(function(input) {
		if (input.type === 'text') {
			if (input.id in state) input.value = state[input.id];
			input.addEventListener('input', updateLessVariable, false);
		}
		if (input.type === 'checkbox') {
			input.checked = state[input.id];
			input.addEventListener('change', updateLessVariable, false);
		}
	});
	window.less.modifyVars(state);
};

function updateLessVariable() {
	state = types[this.type](this, state);
	window.less.modifyVars(state);
	storage.set('state', state);
}

var types = {
	'text': text,
	'checkbox': checkbox
};

function text(input, state) {
	state[input.id] = input.value;
	if (state[input.id] === "") delete state[input.id];
	return state;
}

function checkbox(input, state) {
	state[input.id] = input.checked;
	return state;
}
