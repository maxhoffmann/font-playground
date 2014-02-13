var $ = require('./components/jq');

var autoresizeTextAreas = require('./components/flextext');
var enableModeButton = require('./components/modeButton');
var enableControlsButtons = require('./components/controlsButtons');
var enableLessInputs = require('./components/lessInputs');
var enableEmbedInputs = require('./components/embedInputs');

autoresizeTextAreas();
enableModeButton();
enableControlsButtons();
enableEmbedInputs($('input[data-embed]'));
enableLessInputs($('input[data-less]'));

// var htmlInputs = [].slice.call(document.querySelectorAll('input[data-html]'));
// htmlInputs.forEach(addListener('blur', updateHtml));
