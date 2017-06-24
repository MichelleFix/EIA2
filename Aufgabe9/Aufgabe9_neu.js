//Aufgabe: Aufgabe 9
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 21.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Form;
(function (Form) {
    window.addEventListener("load", init);
    var flavorsArray = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    var toppingsArray = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant"];
    var waffelCupArray = ["Waffel", "Becher"];
    var deliveryArray = ["Abholung", "Lieferung"];
    var flavorsDiv;
    var toppingsDiv;
    var waffelCupDiv;
    var ordersummary;
    var checkOrder;
    var deliveryDiv;
    var inputsIcecream = [];
    var inputToppings = [];
    var inputWaffelCup = [];
    var inputsDelivery = [];
    function init(_event) {
        flavorsDiv = document.getElementById("Flavors");
        toppingsDiv = document.getElementById("Toppings");
        waffelCupDiv = document.getElementById("WaffelOrCup");
        ordersummary = document.getElementById("OrderSummary");
        checkOrder = document.getElementById("checkOrder");
        deliveryDiv = document.getElementById("Delivery");
        createIcecream();
        checkOrder.addEventListener("click", checkFormular);
        flavorsDiv.addEventListener("change", change);
        toppingsDiv.addEventListener("change", change);
        waffelCupDiv.addEventListener("change", change);
    }
    // ##### Bestellung mit Button �berpr�fen ##    
    function checkFormular(_event) {
        var correction = [];
        var name = document.getElementById("Name");
        var surname = document.getElementById("Surname");
        var street = document.getElementById("Street");
        var housenumber = document.getElementById("Housenumber");
        var postcode = document.getElementById("Postcode");
        var place = document.getElementById("Place");
        var mail = document.getElementById("Mail");
        var pickup = document.getElementById("Pickup");
        var delivery = document.getElementById("Delivery");
        if (surname.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("ErrorSurname");
        if (name.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            correction.push("ErrorName");
        }
        if (street.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");
        if (postcode.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");
        if (place.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");
        if (mail.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");
        if (delivery.value != "Abholung" && delivery.value != "Lieferung")
            correction.push("Error");
        var iceSorts = 0;
        var behaelter = 0;
        for (var i = 0; i < inputsIcecream.length; i++) {
            if (parseInt(inputsIcecream[i].value) > 0)
                iceSorts += 1;
        }
        if (iceSorts == 0)
            document.getElementById("ErrorSorts").style.display = "inline";
        correction.push("Error");
        if (correction.length == 0) {
            alert("Vielen Dank fuer Ihre Bestellung");
        }
    }
    // ### Waffel und Cup Radio erstellen, Toppings erstellen und den Stepper erstellen 
    function createIcecream() {
        for (var i = 0; i < flavorsArray.length; i++) {
            createFlavors(flavorsArray[i]);
        }
        for (var i = 0; i < waffelCupArray.length; i++) {
            createRadioWaffelCup(waffelCupArray[i]);
        }
        for (var i = 0; i < toppingsArray.length; i++) {
            createInputToppings(toppingsArray[i]);
        }
        for (var i = 0; i < deliveryArray.length; i++) {
            createDeliveryOptions(deliveryArray[i]);
        }
    }
    // ### Eissorten mit Stepper
    function createFlavors(_sort) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _sort;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _sort;
        flavorsDiv.appendChild(label);
        inputsIcecream.push(input);
    }
    // ### Waffel oder Becher
    function createRadioWaffelCup(_b) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _b;
        label.appendChild(input);
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _b;
        waffelCupDiv.appendChild(label);
        inputWaffelCup.push(input);
    }
    // ### Toppings als Checkboxen
    function createInputToppings(_topping) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = "Topping";
        input.required = true;
        label.id = _topping;
        toppingsDiv.appendChild(label);
        inputToppings.push(input);
        input.style.display = "block";
    }
    // ### Lieferoptionen
    function createDeliveryOptions(_d) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _d;
        label.appendChild(input);
        input.type = "radio";
        input.name = "delivery";
        input.required = true;
        input.value = _d;
        label.id = _d;
        deliveryDiv.appendChild(label);
        inputsDelivery.push(input);
    }
    // ### was passiert wenn etwas ausgew�hlt wird
    function change() {
        var sum = 0;
        for (var i = 0; i < inputsIcecream.length; i++) {
            sum += parseInt(inputsIcecream[i].value);
        }
        for (var i = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                sum += 0.15;
            }
        }
        for (var i = 0; i < inputWaffelCup.length; i++) {
            if (inputWaffelCup[i].checked) {
                sum += 0;
            }
        }
        for (var i = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[0].checked) {
                sum += 0;
            }
        }
        changeShoppingcard(sum);
    }
    // ### Warenkorb
    function changeShoppingcard(_sum) {
        var ordersummary = document.getElementById("OrderSummary");
        ordersummary.innerText = "";
        for (var i = 0; i < inputsIcecream.length; i++) {
            if (parseInt(inputsIcecream[i].value) > 0) {
                ordersummary.innerText += flavorsArray[i] + " - " + (parseInt(inputsIcecream[i].value) * 1) + "€" + "\n";
            }
        }
        for (var i = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                ordersummary.innerText += toppingsArray[i] + " - 15 Cent" + "\n";
            }
        }
        for (var i = 0; i < inputWaffelCup.length; i++) {
            if (inputWaffelCup[i].checked) {
                ordersummary.innerText += waffelCupArray[i] + " - Keine Extrakosten" + "\n";
            }
        }
        var displaySum = document.getElementById("Sum");
        displaySum.innerText = _sum.toString() + "€";
    }
})(Form || (Form = {}));
//# sourceMappingURL=Aufgabe9_neu.js.map