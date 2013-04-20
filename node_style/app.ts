/// <reference path="../node.d.ts" />

var Shapes = require("./shapes");
var Canvas = require("./canvas");

// test exported method log
Shapes.log("I am here");

// test exported class
var rect = new Shapes.Rectangle(10,4);
console.log(JSON.stringify(rect, null, 4));

// test convas
console.log("Canvas.recArea: " + Canvas.recArea(10,4));
