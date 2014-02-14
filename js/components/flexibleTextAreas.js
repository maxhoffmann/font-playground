
exports.enable = function(elements) {

	elements.forEach(function(textarea) {
		autoresize.bind(textarea)();
		textarea.addEventListener('input', autoresize, false);
	});

};

function autoresize() {
	this.style.height = 'auto';
	this.style.height = this.scrollHeight+'px';
	this.scrollTop = this.scrollHeight;
}
