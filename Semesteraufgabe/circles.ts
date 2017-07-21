namespace crazyCircles {
    export class Circles {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        radius: number;

        constructor() {
            this.setRandomPosition();
            this.radius = 30;
            this.x = Math.random();
            this.y = Math.random();
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            // nix
        }

        move(): void {
            // nix
        }

        setRandomPosition(): void {
            // nix
        }
    }
}