(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])