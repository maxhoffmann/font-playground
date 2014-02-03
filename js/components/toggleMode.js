var parse = require('marked');

var button = document.getElementById('mode-toggle');
var markdown = document.getElementById('mode-edit-content').value;
var editMode = document.getElementById('mode-edit');
var viewMode = document.getElementById('mode-view');

function toggleMode() {
	if (viewMode.classList.contains('hidden')) {
		viewMode.innerHTML = parse(markdown);
		button.textContent = 'switch to markdown';
	} else {
		button.textContent = 'switch to html';
	}
	editMode.classList.toggle('hidden');
	viewMode.classList.toggle('hidden');
}

function init() {
	button.addEventListener('click', toggleMode, false);
}

module.exports = init;
