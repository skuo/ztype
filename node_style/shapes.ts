/// <reference path="../node.d.ts" />

module Shapes {
	export class Rectangle {
		constructor (
			public height: number,
			public width: number) {
		}

	}

	export function log(name :string) {
		console.log(name);
	}
}

exports = module.exports = Shapes;