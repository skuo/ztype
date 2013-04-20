/// <reference path="../node.d.ts" />

var Shapes = require("./shapes");

module Convas {
	export function recArea(height: number, width: number) {
		var rec = new Shapes.Rectangle(height, width);
		return height * width;
	}
}

exports = module.exports = Convas;