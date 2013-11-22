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
    return Coachboard;
})();
