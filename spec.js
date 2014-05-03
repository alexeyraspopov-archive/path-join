/* global describe, it, expect */
'use strict';

var join = require('./index');

describe('path-join', function(){
	it('should join', function(){
		var src = './a/b/',
			dest = './c/d/';

		expect(join(src, dest)).toBe('./a/b/c/d/');
	});

	it('should goes up', function(){
		var src = './a/b/',
			dest = '../c/d/';

		expect(join(src, dest)).toBe('./a/c/d/');
	});

	it('should ignore filename', function(){
		var src = './a/b/index',
			dest = './c/d/';

		expect(join(src, dest)).toBe('./a/b/c/d/');
	});

	it('should save dest filename', function(){
		var src = './a/b/',
			dest = '../c/d/index';

		expect(join(src, dest)).toBe('./a/c/d/index');
	});

	it('should join more than 2 paths', function(){
		var paths = [
				'./a/b/',
				'./c/d/',
				'../../../'
			];

		expect(join.apply(null, paths)).toBe('./a/');
	});
});
