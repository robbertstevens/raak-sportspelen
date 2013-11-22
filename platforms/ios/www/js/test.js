var Test = (function () {
    function Test(txt) {
        this.hoi = txt;
    }
    Test.prototype.greet = function () {
        return "hoi";
    };
    return Test;
})();

var t = new Test("hoi");
