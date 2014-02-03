var form = [].slice.call(document.querySelectorAll('form'));
form.forEach(addListener('submit', preventDefault));

var lessInputs = [].slice.call(document.querySelectorAll('input[data-less]'));
lessInputs.forEach(addListener('input', updateLessVariables));

var htmlInputs = [].slice.call(document.querySelectorAll('input[data-html]'));
htmlInputs.forEach(addListener('blur', updateHtml));

var showControlsButton = document.getElementById('controls-show');
var hideControlsButton = document.getElementById('controls-hide');
showControlsButton.addEventListener('click', toggleControls, false);
hideControlsButton.addEventListener('click', toggleControls, false);

function toggleControls() {
	document.body.classList.toggle('show-controls');
}

function addListener(event, listener) {
	return function(element) {
		element.addEventListener(event, listener, false);
	}
}
function updateLessVariables(event) {
	var variables = lessInputs.reduce(getLessVariables, {});
	less.modifyVars(variables);
}
function getLessVariables(variables, input) {
	variables[input.name] = input.value;
	return variables;
}
function updateHtml(event) {
	var element = event.srcElement;
	var insertionPoint = document.getElementById('external');
	insertionPoint.innerHTML = element.value;
}
function preventDefault(event) {
	event.preventDefault();
}
