module.exports = function(selector) {
	return Array.prototype.slice.call(document.querySelectorAll(selector));
};
