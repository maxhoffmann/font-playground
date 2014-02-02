(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var form = [].slice.call(document.querySelectorAll('form'));
form.forEach(addListener('submit', preventDefault));

var lessInputs = [].slice.call(document.querySelectorAll('input[data-less]'));
lessInputs.forEach(addListener('input', updateLessVariables));

var htmlInputs = [].slice.call(document.querySelectorAll('input[data-html]'));
htmlInputs.forEach(addListener('blur', updateHtml));

var showControlsButton = document.getElementById('controls-show');
var hideControlsButton = document.getElementById('controls-hide');
showControlsButton.addEventListener('click', toggleControls, false);
hideControlsButton.addEventListener('click', toggleControls, false);

function toggleControls() {
	hideControlsButton.parentElement.classList.toggle('hidden');
	showControlsButton.classList.toggle('hidden');
}

function addListener(event, listener) {
	return function(element) {
		element.addEventListener(event, listener, false);
	}
}
function updateLessVariables(event) {
	var variables = lessInputs.reduce(getLessVariables, {});
	less.modifyVars(variables);
}
function getLessVariables(variables, input) {
	variables[input.name] = input.value;
	return variables;
}
function updateHtml(event) {
	var element = event.srcElement;
	var insertionPoint = document.getElementById('external');
	insertionPoint.innerHTML = element.value;
}
function preventDefault(event) {
	event.preventDefault();
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWF4Ly5udm0vdjAuMTAuMjQvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21heC9TaXRlcy9mb250dGVzdGVyL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBmb3JtID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykpO1xuZm9ybS5mb3JFYWNoKGFkZExpc3RlbmVyKCdzdWJtaXQnLCBwcmV2ZW50RGVmYXVsdCkpO1xuXG52YXIgbGVzc0lucHV0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS1sZXNzXScpKTtcbmxlc3NJbnB1dHMuZm9yRWFjaChhZGRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVMZXNzVmFyaWFibGVzKSk7XG5cbnZhciBodG1sSW5wdXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWh0bWxdJykpO1xuaHRtbElucHV0cy5mb3JFYWNoKGFkZExpc3RlbmVyKCdibHVyJywgdXBkYXRlSHRtbCkpO1xuXG52YXIgc2hvd0NvbnRyb2xzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzLXNob3cnKTtcbnZhciBoaWRlQ29udHJvbHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMtaGlkZScpO1xuc2hvd0NvbnRyb2xzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ29udHJvbHMsIGZhbHNlKTtcbmhpZGVDb250cm9sc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbnRyb2xzLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbnRyb2xzKCkge1xuXHRoaWRlQ29udHJvbHNCdXR0b24ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblx0c2hvd0NvbnRyb2xzQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG5cdH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUxlc3NWYXJpYWJsZXMoZXZlbnQpIHtcblx0dmFyIHZhcmlhYmxlcyA9IGxlc3NJbnB1dHMucmVkdWNlKGdldExlc3NWYXJpYWJsZXMsIHt9KTtcblx0bGVzcy5tb2RpZnlWYXJzKHZhcmlhYmxlcyk7XG59XG5mdW5jdGlvbiBnZXRMZXNzVmFyaWFibGVzKHZhcmlhYmxlcywgaW5wdXQpIHtcblx0dmFyaWFibGVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG5cdHJldHVybiB2YXJpYWJsZXM7XG59XG5mdW5jdGlvbiB1cGRhdGVIdG1sKGV2ZW50KSB7XG5cdHZhciBlbGVtZW50ID0gZXZlbnQuc3JjRWxlbWVudDtcblx0dmFyIGluc2VydGlvblBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4dGVybmFsJyk7XG5cdGluc2VydGlvblBvaW50LmlubmVySFRNTCA9IGVsZW1lbnQudmFsdWU7XG59XG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuIl19