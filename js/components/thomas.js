module.exports = function(string,bindings){
	for(var binding in bindings)
		string=string.replace(new RegExp('{'+binding+'}','g'), bindings[binding]);
	return string;
};
