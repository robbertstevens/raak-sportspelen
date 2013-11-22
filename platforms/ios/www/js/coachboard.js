/// <reference path="references.ts" />
var Coachboard = (function () {
    function Coachboard(canvas) {
        this._canvas = canvas;
    }
    Coachboard.prototype.getContext2d = function () {
        return this._canvas.getContext("2d");
    };
    Coachboard.prototype.touchStart = function (e) {
        var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        this._current = pos;
        this._start = pos;
    };
    Coachboard.prototype.touchEnd = function (e) {
        var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        this._prev = null;
        this._current = null;
        this._end = pos;
        this._objects.push(null);
    };
    Coachboard.prototype.invalidate = function () {
        this._objects.forEach(function (obj) {
            obj.draw();
        });
    };
    Coachboard.prototype.clear = function (full) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        if (full) {
            this._objects = [];
        }
    };
    return Coachboard;
})();
