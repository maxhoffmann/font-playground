var storage = require('./localstorage');
var state = storage.get('embed') || {};

function embedInputs(inputs) {
	inputs.forEach(function(input) {
		if (state[input.id]) input.value = state[input.id];
		input.addEventListener('input', insertWebfontScript, false);
		insertWebfontScript.bind(input)();
	});
}

function insertWebfontScript() {
	state[this.id] = this.value;
	if (state[this.id] === "")	delete state[this.id];
	webfontServices[this.id](this);
	storage.set('embed', state);
}

var webfontServices = {
	'typekit': typekit,
	'cloud-typography': cloudTypography
};

function typekit(input) {
	var script = document.getElementById('typekit-embed');
	if (script) script.parentElement.removeChild(script);

	script = document.createElement('script');
	script.id = 'typekit-embed';
	script.src = '//use.typekit.net/'+input.value+'.js';
	script.onload = load;
	document.head.appendChild(script);

	function load() {
		try{
			Typekit.load();
		} catch(e) {}
	}
}

function cloudTypography(input) {
	var link = document.getElementById('cloud-typography-embed');
	if (link) link.parentElement.removeChild(link);

	link = document.createElement('link');
	link.id = 'cloud-typography-embed';
	link.rel = 'stylesheet';
	link.href = input.value;
	document.head.appendChild(link);
}

module.exports = embedInputs;
