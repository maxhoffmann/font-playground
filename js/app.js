var autoresize = require('./components/autoresize');
var toggleMode = require('./components/toggleMode');
var toggleControls = require('./components/toggleControls');

autoresize();
toggleMode();
toggleControls();

// var form = [].slice.call(document.querySelectorAll('form'));
// form.forEach(addListener('submit', preventDefault));

// var lessInputs = [].slice.call(document.querySelectorAll('input[data-less]'));
// lessInputs.forEach(addListener('input', updateLessVariables));

// var htmlInputs = [].slice.call(document.querySelectorAll('input[data-html]'));
// htmlInputs.forEach(addListener('blur', updateHtml));
