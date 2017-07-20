namespace crazyCircles {
    export class Circles {
        x: number;
        y: number;
        radius: number;
        vx: number;
        vy: number;


        constructor(_x: number, _y: number) {
            this.setRandomPosition();
            this.radius = 30;
            this.vx = 2;
            this.vy = -2;
        }

        update(): void {
            this.moveCircles();
            this.drawCircles();
            this.animateCircles();
        }

        drawCircles(): void {
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        moveCircles(): void {
            this.x += Math.random() * 5;
            this.y += Math.random() * 5;

        }

        setRandomPosition(): void {
            this.x = (Math.random() * (150) + 10);      // 2. Attribut von Flower
            this.y = (Math.random() * (150) + 10);      // 3. Attribut von Flower

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
        //
        //            //linker oder rechter Rand erreicht
        //            if (this.x + this.vx > crc2.canvas.width - this.radius || this.x + this.vx < this.radius) {
        //                this.vx = -this.vx;
        //            }
        //
        //            //oberer und unterer Rand erreicht
        //            if (this.y + this.vy < this.radius || this.y + this.vy >= crc2.canvas.height - this.radius) {
        //                this.vy = -this.vy; //nach unten bewegen --> Vorzeichen von vy zu +
        //            }
        //
        //            this.x += this.vx; //+2
        //            this.y += this.vy; //-2
        //


    }
}