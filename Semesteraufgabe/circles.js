var crazyCircles;
(function (crazyCircles) {
    class Circles {
        constructor() {
            this.setRandomPosition();
            this.radius = 30;
            this.x = (Math.random() * (400) + 50);
            this.y = (Math.random() * (400) + 50);
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            // nix
        }
        move() {
            // nix
        }
        setRandomPosition() {
            // nix
        }
    }
    crazyCircles.Circles = Circles;
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=circles.js.map