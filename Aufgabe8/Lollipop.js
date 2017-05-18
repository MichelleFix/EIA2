var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Inheritance;
(function (L8_Inheritance) {
    var Lollipop = (function (_super) {
        __extends(Lollipop, _super);
        function Lollipop(_radius) {
            _super.call(this);
            _super.prototype.setRandomPosition.call(this);
            this.radius = _radius;
        }
        // BLume 2 
        Lollipop.prototype.draw = function () {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color; // "#F2F5A9"
            L8_Inheritance.crc2.strokeStyle = L8_Inheritance.crc2.fillStyle;
            L8_Inheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            L8_Inheritance.crc2.moveTo(this.x, this.y + 10);
            L8_Inheritance.crc2.lineTo(this.x, this.y + 20);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        };
        return Lollipop;
    }(L8_Inheritance.Flowers));
    L8_Inheritance.Lollipop = Lollipop;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Lollipop.js.map