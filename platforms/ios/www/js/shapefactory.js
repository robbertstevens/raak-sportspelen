/// <reference path="references.ts" />
var ShapeFactory = (function () {
    function ShapeFactory(context) {
        this._context = context;
    }
    ShapeFactory.prototype.CreateShape = function (shape, from, to) {
        switch (shape) {
            case "fixedLine":
                this._newShape = new Line(from, to, this._context);
                break;
            case "rectangle":
                this._newShape = new Rectangle(from, to, this._context);
                break;
            case "freeLine":
                this._newShape = new FreeLine(from, to, this._context);
                break;
        }
        return this._newShape;
    };
    return ShapeFactory;
})();
