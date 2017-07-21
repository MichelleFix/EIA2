var crazyCircles;
(function (crazyCircles) {
    class RedCircle extends crazyCircles.Circles {
        constructor() {
            super();
            this.vx = 3;
            this.vy = -3;
        }
        draw() {
            crazyCircles.crc2.beginPath();
            crazyCircles.crc2.fillStyle = "red";
            crazyCircles.crc2.strokeStyle = "red";
            crazyCircles.crc2.moveTo(this.x, this.y);
            crazyCircles.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crazyCircles.crc2.closePath();
            crazyCircles.crc2.fill();
            crazyCircles.crc2.stroke();
        }
        move() {
            let newX = this.x + this.vx;
            //linker oder rechter Rand erreicht
            if (newX > crazyCircles.crc2.canvas.width - this.radius || newX < this.radius) {
                this.vx = -this.vx;
            }
            //oberer Rand erreicht
            if (this.y + this.vy < this.radius || this.y + this.vy >= crazyCircles.crc2.canvas.height - this.radius) {
                this.vy = -this.vy; //nach unten bewegen --> Vorzeichen von vy zu +
            }
            //neue Position
            this.x += this.vx; //+2
            this.y += this.vy; //-2
        } //move
        setRandomPosition() {
            this.x = (Math.random() * (400) + 50); // 2. Attribut von Flower
            this.y = (Math.random() * (400) + 50); // 3. Attribut von Flower
        }
    }
    crazyCircles.RedCircle = RedCircle;
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=redcircle.js.map