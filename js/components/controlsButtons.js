
exports.enable = function(showElement, hideElement) {
	showElement.addEventListener('click', toggleControls, false);
	hideElement.addEventListener('click', toggleControls, false);
};

function toggleControls() {
	document.body.classList.toggle('controls-visible');
}
