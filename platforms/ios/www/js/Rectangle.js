/// <reference path="references.ts" />
var Rectangle = (function () {
    function Rectangle(from, to, canvas) {
        this.from = from;
        this.to = to;
        this.canvas = canvas;
    }
    Rectangle.prototype.draw = function () {
        this.canvas.beginPath();
        this.canvas.rect(this.from.x, this.from.y, (this.to.x - this.from.x), (this.to.y - this.from.y));
        this.canvas.stroke();
        this.canvas.closePath();
    };
    return Rectangle;
})();
