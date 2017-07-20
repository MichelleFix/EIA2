namespace crazyCircles {

    export class RedCircle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        radius: number;

        constructor() {
            this.setRandomPosition();
            this.radius = 30;
            this.vx = 2;
            this.vy = -2;
        }

        update(): void {
            this.drawRedCircle();
            this.animateRedCircle();
        }

        drawRedCircle(): void {
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.strokeStyle = "red";
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

        animateRedCircle(): void {
            let newX = this.x + this.vx;


            //linker oder rechter Rand erreicht
            if (newX > crc2.canvas.width - this.radius || newX < this.radius) {
                this.vx = -this.vx;
            }

            //oberer Rand erreicht
            if (this.y + this.vy < this.radius || this.y + this.vy >= crc2.canvas.height - this.radius) {
                this.vy = -this.vy; //nach unten bewegen --> Vorzeichen von vy zu +
            }

            //neue Position
            this.x += this.vx; //+2
            this.y += this.vy; //-2
        }//move


    }
}