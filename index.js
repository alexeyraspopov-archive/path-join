'use strict';

module.exports = function(){
	return [].slice.call(arguments).reduce(join, './');
};

function join(src, dest){
	src = src.split(/\/+/).slice(0, -1);
	dest = dest.split(/\/+/);

	dest.filter(function(term){
		return term !== '.';
	}).forEach(function(term){
		return term === '..' ? src.pop() : src.push(term);
	});

	return src.join('/');
}
