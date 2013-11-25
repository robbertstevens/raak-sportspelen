var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.difference = function (from, to) {
        return new Vector(from.x - to.x, from.y - to.y);
    };
    return Vector;
})();
