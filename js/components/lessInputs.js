var storage = require('./localstorage');
var state = storage.get('state') || {};

exports.enable = function(inputs) {
	inputs.forEach(function(input) {
		if (state[input.id]) input.value = state[input.id];
		if (input.type === 'text') input.addEventListener('input', updateLessVariable, false);
		if (input.type === 'checkbox') input.addEventListener('change', updateLessVariable, false);
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
	if (state[input.id] === "") delete state[input.id];
	return state;
}
