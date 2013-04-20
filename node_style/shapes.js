var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    })();
    Shapes.Rectangle = Rectangle;    
    function log(name) {
        console.log(name);
    }
    Shapes.log = log;
})(Shapes || (Shapes = {}));
exports = module.exports = Shapes;
//@ sourceMappingURL=shapes.js.map
