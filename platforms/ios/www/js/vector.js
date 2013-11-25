var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.difference = function (target) {
        return new Vector(target.x - this.x, target.y - this.y);
    };
    return Vector;
})();
