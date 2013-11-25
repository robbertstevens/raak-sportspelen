var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.difference = function (target) {
        return new Vector(this.x - target.x, this.y - target.y);
    };
    return Vector;
})();
