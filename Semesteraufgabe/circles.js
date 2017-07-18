var crazyCircles;
(function (crazyCircles) {
    class Circles {
        constructor() {
            this.setRandomPosition();
        }
        update() {
            this.moveCircles();
            this.drawCircles();
        }
        drawCircles() {
            crazyCircles.crc2.fillStyle = "black";
            crazyCircles.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI, false);
            crazyCircles.crc2.fill();
            crazyCircles.crc2.stroke();
        }
        moveCircles() {
            this.x += Math.random() * 10 - 2;
            this.y += Math.random() * 10 - 2;
        }
        setRandomPosition() {
            this.x = (Math.random() * (400 - 100) + 100); // 2. Attribut von Flower
            this.y = (Math.random() * (500 - 100) + 100); // 3. Attribut von Flower
        }
    }
    crazyCircles.Circles = Circles;
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=circles.js.map