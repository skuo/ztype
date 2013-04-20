var Shapes = require("./shapes");
var Convas;
(function (Convas) {
    function recArea(height, width) {
        var rec = new Shapes.Rectangle(height, width);
        return height * width;
    }
    Convas.recArea = recArea;
})(Convas || (Convas = {}));
exports = module.exports = Convas;
//@ sourceMappingURL=canvas.js.map
