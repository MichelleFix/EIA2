var crazyCircles;
(function (crazyCircles) {
    class Circles {
        constructor() {
            this.setRandomPosition();
            this.radius = 30;
            this.vx = 2;
            this.vy = -2;
        }
        update() {
            this.drawCircles();
            this.animateCircles();
        }
        drawCircles() {
            crazyCircles.crc2.beginPath();
            crazyCircles.crc2.fillStyle = "black";
            crazyCircles.crc2.strokeStyle = "black";
            crazyCircles.crc2.moveTo(this.x, this.y);
            crazyCircles.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crazyCircles.crc2.closePath();
            crazyCircles.crc2.fill();
            crazyCircles.crc2.stroke();
        }
        setRandomPosition() {
            this.x = (Math.random() * (150) + 10); // 2. Attribut von Flower
            this.y = (Math.random() * (150) + 10); // 3. Attribut von Flower
        }
        animateCircles() {
            if ((this.x + this.vx + this.radius > 0 + crazyCircles.crc2.canvas.width) || (this.x - this.radius + this.vx < 0)) {
                this.vx = -this.vx;
            }
            if ((this.y + this.vy + this.radius > 0 + crazyCircles.crc2.canvas.height) || (this.y - this.radius + this.vy < 0)) {
                this.vy = -this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
        }
    }
    crazyCircles.Circles = Circles;
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=circles.js.map