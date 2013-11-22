/// <reference path="references.ts" />
var Line = (function () {
    function Line(from, to, canvas) {
        this.from = from;
        this.to = to;
        this.canvas = canvas;
    }
    Line.prototype.draw = function () {
        this.canvas.beginPath();
        this.canvas.moveTo(this.from.x, this.from.y);
        this.canvas.lineTo(this.to.x, this.to.y);
        this.canvas.stroke();
        this.canvas.closePath();
    };
    return Line;
})();
