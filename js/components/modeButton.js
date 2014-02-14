var parse = require('marked');
var util = require('util');

var markdown = document.getElementById('mode-edit-content');
var editMode = document.getElementById('mode-edit');
var viewMode = document.getElementById('mode-view');

exports.enable = function(element) {
	element.addEventListener('click', toggleMode, false);
};

function toggleMode() {
	if (viewMode.classList.contains('hidden')) {
		viewMode.innerHTML = parse(markdown.value);
		this.textContent = 'switch to markdown';
	} else {
		this.textContent = 'switch to html';
	}
	editMode.classList.toggle('hidden');
	viewMode.classList.toggle('hidden');
}
