var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Inheritance;
(function (L8_Inheritance) {
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Create honeybee");
            //            this.setRandomPosition();
            //            this.setRandomTargetPosition();
        }
        HoneyBee.prototype.draw = function () {
            // K�rper
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x - 10, this.y);
            L8_Inheritance.crc2.bezierCurveTo(this.x + 3.75, this.y - 7, this.x + 11.25, this.y - 7, this.x + 15, this.y);
            L8_Inheritance.crc2.bezierCurveTo(this.x + 11.25, this.y + 7, this.x + 3.75, this.y + 7, this.x - 15, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            // Kopf
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "black";
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x + 15, this.y);
            L8_Inheritance.crc2.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI, true);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            //Fl�gel
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#CEF6F5";
            L8_Inheritance.crc2.strokeStyle = "#CEF6F5";
            L8_Inheritance.crc2.moveTo(this.x + 11, this.y - 3);
            L8_Inheritance.crc2.bezierCurveTo(this.x + this.wingSize, this.y - this.wingSize, this.x + (this.wingSize - 18), this.y - this.wingSize, this.x + 11, this.y - 3); //this.x + 20, this.y - 20, this.x + 2, this.y - 20, this.x + 13, this.y - 3
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            // Streifen
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y - 4);
            L8_Inheritance.crc2.lineTo(this.x - 2, this.y + 4);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x + 1, this.y - 6);
            L8_Inheritance.crc2.lineTo(this.x + 1, this.y + 6);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x + 4, this.y - 6.5);
            L8_Inheritance.crc2.lineTo(this.x + 4, this.y + 6.5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        };
        HoneyBee.prototype.setRandomTargetPosition = function () {
            this.targetX = Math.random() * L8_Inheritance.crc2.canvas.width;
            this.targetY = Math.random() * L8_Inheritance.crc2.canvas.height;
        };
        HoneyBee.prototype.fly = function () {
            var xDiff = this.targetX - this.x;
            var yDiff = this.targetY - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            //            else {
            //                this.x += xDiff * this.speed;
            //                this.y += yDiff * this.speed;
            //            } //ende else
        }; //Ende Fly funktion
        return HoneyBee;
    }(L8_Inheritance.Bees));
    L8_Inheritance.HoneyBee = HoneyBee; // Ende Klasse
})(L8_Inheritance || (L8_Inheritance = {})); // Ende namespace
//# sourceMappingURL=Honeybees.js.map