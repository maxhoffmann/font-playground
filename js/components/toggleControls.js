var showControlsButton = document.getElementById('controls-show');
var hideControlsButton = document.getElementById('controls-hide');

function toggleControls() {
	document.body.classList.toggle('controls-visible');
}

function init() {
	showControlsButton.addEventListener('click', toggleControls, false);
	hideControlsButton.addEventListener('click', toggleControls, false);
}

module.exports = init;
