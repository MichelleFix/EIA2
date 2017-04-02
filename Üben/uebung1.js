document.addEventListener('DOMConetenLoaded', function () {
    var n = 0;
    var div = document.createElement("div");
    for (var i = 0; i < 64; i++) {
        var element = document.createElement('div');
        if (i % 2 == 0) {
            var s = div.style;
            s.backgroundColor = "black";
        }
    }
});
//# sourceMappingURL=uebung1.js.map