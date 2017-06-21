//Aufgabe: Aufgabe 9
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 21.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Form;
(function (Form) {
    window.addEventListener("load", init);
    var flavorsArray = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    var toppingsArray = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant", "Kein Topping"];
    var waffelCupArray = ["Waffel", "Becher"];
    var flavorsDiv;
    var toppingsDiv;
    var waffelCupDiv;
    var ordersummary;
    var checkOrder;
    var selectedIcecream = [];
    var icecream = [];
    var inputToppings = [];
    var radioWaffelCup = [];
    var inputStepper = [];
    var inputsDelivery = [];
    var selectListe = [];
    function init(_event) {
        flavorsDiv = document.getElementById("Flavors");
        toppingsDiv = document.getElementById("Toppings");
        waffelCupDiv = document.getElementById("WaffelOrCup");
        ordersummary = document.getElementById("OrderSummary");
        checkOrder = document.getElementById("checkOrder");
        createIcecream();
        checkOrder.addEventListener("click", checkFormular);
        ordersummary.addEventListener("change", change);
    }
    // ##### Bestellung mit Button �berpr�fen ##    
    function checkFormular(_event) {
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
        surname.style.backgroundColor = "red";
        if (name.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        name.style.backgroundColor = "red";
        if (street.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        street.style.backgroundColor = "red";
        if (postcode.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        postcode.style.backgroundColor = "red";
        if (place.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        place.style.backgroundColor = "red";
        if (mail.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        mail.style.backgroundColor = "red";
        if (delivery.value != "radio1" && delivery.value != "radio2")
            document.getElementById("ErrorDeliveryoptions").style.display = "inline";
        console.log("Lieferung");
        var iceSorts = 0;
        var behaelter = 0;
        for (var i = 0; i < selectedIcecream.length; i++) {
            if (parseInt(selectedIcecream[i].value) > 0)
                iceSorts += 1;
        }
        if (iceSorts == 0)
            document.getElementById("ErrorSorts").style.display = "inline";
        else {
            alert("Vielen Dank f�r Ihre Bestellung!");
            location.reload();
        }
    }
    // ###    
    function createIcecream() {
        createSelect();
        for (var i = 0; i < waffelCupArray.length; i++) {
            createRadioWaffelCup(waffelCupArray[i]);
        }
        for (var i = 0; i < toppingsArray.length; i++) {
            createInputToppings(toppingsArray[i]);
        }
        createStepper();
    }
    function createSelect() {
        var select = document.createElement("select");
        for (var i = 0; i < flavorsArray.length; i++) {
            var option = document.createElement("option");
            option.text = flavorsArray[i];
            option.value = flavorsArray[i];
            select.appendChild(option);
            selectListe.push(flavorsArray[i]);
            icecream.push(option);
        }
        document.getElementById("Flavors").appendChild(select);
    }
    function createStepper() {
        var stepper = document.createElement("input");
        stepper.type = "number";
        stepper.min = "1";
        stepper.max = "10";
        stepper.value = "1";
        stepper.step = "1";
        document.getElementById("Scoops").appendChild(stepper);
        inputStepper.push(stepper);
    }
    function createRadioWaffelCup(_behaelter) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _behaelter;
        waffelCupDiv.appendChild(label);
        radioWaffelCup.push(input);
    }
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
    function change() {
        var sum = 0;
        for (var i = 0; i < icecream.length; i++) {
            sum += parseInt(icecream[i].value);
        }
        for (var i = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                sum += 0.15;
            }
        }
        for (var i = 0; i < radioWaffelCup.length; i++) {
            if (radioWaffelCup[i].checked) {
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
    function changeShoppingcard(_sum) {
        var ordersummary = document.getElementById("OrderSummary");
        ordersummary.innerText = "";
        for (var i = 0; i < icecream.length; i++) {
            if (parseInt(icecream[i].value) > 0) {
                ordersummary.innerText += flavorsArray[i] + " - " + (parseInt(icecream[i].value) * 1) + " Euro" + "\n";
            }
        }
        for (var i = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                ordersummary.innerText += toppingsArray[i] + " - 15 Cent" + "\n";
            }
        }
        for (var i = 0; i < radioWaffelCup.length; i++) {
            if (radioWaffelCup[i].checked) {
                ordersummary.innerText += waffelCupArray[i] + " - Keine Extrakosten" + "\n";
            }
        }
        var displaySum = document.getElementById("Sum");
        displaySum.innerText = _sum.toString() + " Euro";
    }
})(Form || (Form = {}));
//# sourceMappingURL=Aufgabe9_neu.js.map