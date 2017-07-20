namespace crazyCircles {
    export class Circles {
        x: number;
        y: number;
        radius: number;
        vx: number;
        vy: number;


        constructor() {
            this.setRandomPosition();
            this.radius = 30;
            this.vx = 2;
            this.vy = -2;
            this.x = Math.random();
            this.y = Math.random();
        }

        update(): void {

            this.drawCircles();
            this.animateCircles();
        }

        drawCircles(): void {
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (450) + 10);      // 2. Attribut von Flower
            this.y = (Math.random() * (450) + 10);      // 3. Attribut von Flower

        }

        animateCircles(): void {

            if ((this.x + this.vx + this.radius > 0 + crc2.canvas.width) || (this.x - this.radius + this.vx < 0)) {
                this.vx = - this.vx;
            }
            if ((this.y + this.vy + this.radius > 0 + crc2.canvas.height) || (this.y - this.radius + this.vy < 0)) {
                this.vy = - this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
        }

    }
}