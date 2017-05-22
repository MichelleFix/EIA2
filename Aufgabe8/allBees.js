var L8_Inheritance;
(function (L8_Inheritance) {
    var allBees = (function () {
        function allBees(_x, _y) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        allBees.prototype.update = function () {
            this.fly();
            this.draw();
        };
        allBees.prototype.draw = function () {
            // nix
        };
        //Info in fly rausgenommen
        allBees.prototype.fly = function () {
            //nix
        };
        allBees.prototype.setRandomStyle = function () {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);
        };
        return allBees;
    }());
    L8_Inheritance.allBees = allBees;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=allBees.js.map