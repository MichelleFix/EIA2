var L8_Inheritance;
(function (L8_Inheritance) {
    var Flowers = (function () {
        //randomFlowerNumber: number;
        function Flowers() {
            console.log("create Flower");
            this.setRandomPosition();
            this.setRandomStyle();
        }
        Flowers.prototype.draw = function () {
            // abstract
        };
        Flowers.prototype.setRandomStyle = function () {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        Flowers.prototype.setRandomPosition = function () {
            this.x = (Math.random() * (400 - 250) + 250); // 2. Attribut von Flower
            this.y = (Math.random() * (540 - 450) + 450); // 3. Attribut von Flower
        };
        return Flowers;
    }());
    L8_Inheritance.Flowers = Flowers;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Flowers.js.map