var crazyCircles;
(function (crazyCircles) {
    class Circles {
        constructor() {
            this.setRandomPosition();
            this.radius = 30;
        }
        update() {
            this.moveCircles();
            this.drawCircles();
        }
        drawCircles() {
            crazyCircles.crc2.beginPath();
            crazyCircles.crc2.fillStyle = "black";
            crazyCircles.crc2.moveTo(this.x, this.y);
            crazyCircles.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crazyCircles.crc2.closePath();
            crazyCircles.crc2.fill();
            crazyCircles.crc2.stroke();
        }
        moveCircles() {
            this.x += Math.random() * 5;
            this.y += Math.random() * 5;
        }
        setRandomPosition() {
            this.x = (Math.random() * (500) + 10); // 2. Attribut von Flower
            this.y = (Math.random() * (500) + 10); // 3. Attribut von Flower
        }
    }
    crazyCircles.Circles = Circles;
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=circles.js.map