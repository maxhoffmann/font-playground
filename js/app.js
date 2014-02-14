var $ = require('./components/jq');

var flexibleTextAreas = require('./components/flexibleTextAreas');
var modeButton        = require('./components/modeButton');
var controlsButtons   = require('./components/controlsButtons');
var lessInputs        = require('./components/lessInputs');
var embedInputs       = require('./components/embedInputs');

flexibleTextAreas.enable($('textarea[autoresize]'));
modeButton.enable(document.getElementById('mode-toggle'));
controlsButtons.enable(
	document.getElementById('controls-show'),
	document.getElementById('controls-hide')
);
lessInputs.enable($('input[data-less]'));
embedInputs.enable($('input[data-embed]'));
