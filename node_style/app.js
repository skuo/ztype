var Shapes = require("./shapes");
var Canvas = require("./canvas");
Shapes.log("I am here");
var rect = new Shapes.Rectangle(10, 4);
console.log(JSON.stringify(rect, null, 4));
console.log("Canvas.recArea: " + Canvas.recArea(10, 4));
//@ sourceMappingURL=app.js.map
