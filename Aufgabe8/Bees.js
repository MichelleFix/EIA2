var L8_Inheritance;
(function (L8_Inheritance) {
    var Bees = (function () {
        function Bees(_x, _y) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        Bees.prototype.update = function () {
            this.draw();
            this.fly();
        };
        Bees.prototype.draw = function () {
        };
        Bees.prototype.fly = function () {
            this.x += Math.floor(Math.random() * 10) - 5;
            this.y += Math.random() * 4 - 2;
        };
        Bees.prototype.setRandomStyle = function () {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);
        };
        return Bees;
    }());
    L8_Inheritance.Bees = Bees;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Bees.js.map