/// <reference path="references.ts" />
var CoachBoard = (function () {
    function CoachBoard(canvas) {
        this._canvas = canvas;
        this._objects = [];
        this._shapeType = "fixedline";
        this._context = this.getContext2d();

        this._shapeFactory = new ShapeFactory(this._context);

        this._canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
        this._canvas.addEventListener("touchend", this.touchEnd.bind(this), false);
    }
    CoachBoard.prototype.getContext2d = function () {
        return this._canvas.getContext("2d");
    };
    CoachBoard.prototype.touchStart = function (e) {
        var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        this._current = pos;
        this._start = pos;
    };
    CoachBoard.prototype.touchEnd = function (e) {
        var pos = new Vector(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        this._prev = null;
        this._current = null;
        this._end = pos;
        var sf = new ShapeFactory(this._context);
        console.log(this._objects);
        this._objects.push(sf.CreateShape(this._shapeType, this._start, this._end));
    };
    CoachBoard.prototype.invalidate = function () {
        this._objects.forEach(function (obj) {
            obj.draw();
        });
    };
    CoachBoard.prototype.clear = function (full) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        if (full) {
            this._objects = [];
        }
    };

    CoachBoard.prototype.setShapeType = function (shape) {
        this._shapeType = shape;
    };
    return CoachBoard;
})();
