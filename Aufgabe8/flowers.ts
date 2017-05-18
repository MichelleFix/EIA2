namespace L8_Inheritance {

    export class Flowers {
        x: number;
        y: number;
        color: string;
        randomFlowerNumber: number;


        constructor(_x: number, _y: number) {
            console.log("create Flower");
            this.setRandomPosition();
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;

        }

        draw(): void {
            // abstract
        }

        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }


        setRandomPosition(): void {
            this.x = (Math.random() * (400 - 250) + 250);      // 2. Attribut von Flower
            this.y = (Math.random() * (540 - 450) + 450);      // 3. Attribut von Flower

        }

        randomFlower(): void {
            this.randomFlowerNumber = Math.floor((Math.random() * 5) + 0);
        }
    }
}