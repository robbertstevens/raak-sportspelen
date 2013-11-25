/// <reference path="references.ts" />
var CoachBoard = (function () {
    function CoachBoard(canvas) {
        this._canvas = canvas;
        this._objects = [];
        this._shapeType = "fixedLine";
        this._context = this.getContext2d();

        this._shapeFactory = new ShapeFactory(this._context);

        this._canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
        this._canvas.addEventListener("touchmove", this.touchMove.bind(this), false);
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

    CoachBoard.prototype.touchMove = function (e) {
        var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        this._prev = this._current;
        this._current = pos;
        if (this._shapeType === "freeLine") {
            this._objects.push(this._shapeFactory.CreateShape(this._shapeType, this._prev, this._current));
        }
        this.invalidate();
    };

    CoachBoard.prototype.touchEnd = function (e) {
        var pos = new Vector(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        this._prev = null;
        this._current = null;
        this._end = pos;
        this._objects.push(this._shapeFactory.CreateShape(this._shapeType, this._start, this._end));
        this.invalidate();
    };
    CoachBoard.prototype.invalidate = function () {
        this.clear(false);
        if (this._start != null && this._current != null) {
            this._shapeFactory.CreateShape(this._shapeType, this._start, this._current).draw();
        }

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
