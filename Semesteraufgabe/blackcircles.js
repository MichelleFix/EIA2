var crazyCircles;
(function (crazyCircles) {
    class BlackCircles extends crazyCircles.Circles {
        constructor() {
            super();
            this.vx = (Math.random() * (3) + 0);
            this.vy = (Math.random() * (0) + -3);
        }
        draw() {
            crazyCircles.crc2.beginPath();
            crazyCircles.crc2.fillStyle = "black";
            crazyCircles.crc2.strokeStyle = "black";
            crazyCircles.crc2.moveTo(this.x, this.y);
            crazyCircles.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crazyCircles.crc2.closePath();
            crazyCircles.crc2.fill();
            crazyCircles.crc2.stroke();
        }
        move() {
            if ((this.x + this.vx + this.radius > 0 + crazyCircles.crc2.canvas.width) || (this.x - this.radius + this.vx < 0)) {
                this.vx = -this.vx;
            }
            if ((this.y + this.vy + this.radius > 0 + crazyCircles.crc2.canvas.height) || (this.y - this.radius + this.vy < 0)) {
                this.vy = -this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
        }
        setRandomPosition() {
            this.x = (Math.random() * (400) + 50); // 2. Attribut von Flower
            this.y = (Math.random() * (400) + 50); // 3. Attribut von Flower
        }
    }
    crazyCircles.BlackCircles = BlackCircles;
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=blackcircles.js.map