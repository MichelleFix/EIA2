var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Inheritance;
(function (L8_Inheritance) {
    var Tulip = (function (_super) {
        __extends(Tulip, _super);
        function Tulip(_x, _y) {
            _super.call(this, _x, _y);
        }
        // Tulpe
        Tulip.prototype.draw = function () {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color; // Attribut von Flower
            L8_Inheritance.crc2.strokeStyle = L8_Inheritance.crc2.fillStyle;
            L8_Inheritance.crc2.moveTo(this.x, this.y);
            L8_Inheritance.crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            L8_Inheritance.crc2.lineTo(this.x + 15, this.y + 5);
            L8_Inheritance.crc2.lineTo(this.x + 10, this.y);
            L8_Inheritance.crc2.lineTo(this.x + 5, this.y + 5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        };
        return Tulip;
    }(L8_Inheritance.Flowers));
    L8_Inheritance.Tulip = Tulip;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Tulip.js.map