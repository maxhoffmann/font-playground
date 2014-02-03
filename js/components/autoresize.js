function init() {

	var resizingTextareas = [].slice.call(document.querySelectorAll('textarea[autoresize]'));

	resizingTextareas.forEach(function(textarea) {
		autoresize.bind(textarea)();
		textarea.addEventListener('input', autoresize, false);
	});

}

function autoresize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight+'px';
  this.scrollTop = this.scrollHeight;
}

module.exports = init;
