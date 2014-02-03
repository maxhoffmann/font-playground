var storage = {};
var namespace = 'fonttester_';

storage.get = function(key) {
	return JSON.parse(localStorage.getItem(namespace + key));
};

storage.set = function(key, value) {
	value = JSON.stringify(value);
	return localStorage.setItem(namespace + key, value);
};

storage.remove = function(key) {
	return localStorage.removeItem(namespace + key);
};

storage.clear = localStorage.clear.bind(localStorage);

module.exports = storage;
