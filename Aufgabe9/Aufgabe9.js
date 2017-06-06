var Form;
(function (Form) {
    window.addEventListener("load", init);
    var fieldset;
    //Arrays 
    var flavors = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    var toppings = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant", "Kein Topping"];
    // Arrays wo die ausgew�hlten Elemente gespeichert werden
    var inputFlavors = [];
    var inputToppings = [];
    // Elemente aus dem HTML Dokument
    var waffelButton = document.getElementById("Waffel");
    var cupButton = document.getElementById("Cup");
    var newFlavorButton = document.getElementById("AddIcecream");
    var checkButton = document.getElementById("checkOrder");
    var checkboxToppings = document.getElementById("CheckboxToppings");
    function init(_event) {
        fieldset = document.getElementsByTagName("fieldset")[1];
        // Waffel oder Becher ausw�hlen
        document.addEventListener("click", chooseDarreichungsform);
        // Eissorte hinzuf�gen
        var newIcecream = document.getElementById("AddIcecream");
        newIcecream.addEventListener("click", addFlavor);
        // Erstellt quasi alles 
        createIcecream();
        // Bestellung �berpr�fen
        document.addEventListener("click", checkOrder);
        fieldset.addEventListener("change", change);
    }
    // -------------------------------------------------- Waffel oder Becher ------------------------------------------------------
    function chooseDarreichungsform(_event) {
        var target = _event.target;
        var counter = document.getElementById("ScoopCounter");
        if (target.id == "Waffel")
            counter.max = "5";
        console.log("Waffel choosen");
        if (target.id == "Cup")
            counter.max = "10";
        console.log("Cup choosen");
    }
    // -------------------------------------------------- EISSORTEN ------------------------------------------------------
    //  Eissorten erstellen
    function createIcecream() {
        for (var i = 0; i < flavors.length; i++) {
            console.log(flavors[i]);
            createFlavor(flavors[i]);
        }
        for (var i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
    }
    // Select Felder mit den Eissorten beschriften
    function createFlavor(_sort) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        var icecream = document.getElementById("Icecream");
        var select = document.createElement("select");
        var option = document.createElement("option");
        option.innerText = _sort;
        select.appendChild(option);
        option.value = "1";
        icecream.appendChild(select);
        inputFlavors.push(option);
    }
    //Eissorte hinzuf�gen            
    function addFlavor(_event) {
        var amount = 8;
        for (var n = 0; n > amount; n++) {
        }
    }
    // -------------------------------------------------- Toppings -------------------------------------------------- 
    function createCheckbox(_verzierung) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _verzierung;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _verzierung;
        checkboxToppings.appendChild(label);
        inputToppings.push(input);
    }
    function change() {
        var sum = 0;
        for (var i = 0; i < inputFlavors.length; i++) {
            sum += parseInt(inputFlavors[i].value);
        }
        for (var i = 0; i < inputToppings.length; i++) {
            sum += 0.15;
        }
        if (cupButton.onclick) {
            sum += 0, 1;
        }
        else {
        }
        updateShoppingCard(sum);
    }
    function updateShoppingCard(_sum) {
        var sum = document.getElementById("Sum");
        var items = document.getElementById("Items");
        items.innerText = "";
        if (cupButton.onclick) {
            items.innerText += "Becher" + " " + "0,10" + "€" + " \n";
        }
        if (waffelButton.onclick) {
            items.innerText += "Waffel" + " " + "0,00" + "€" + " \n";
        }
        for (var i = 0; i < inputFlavors.length; i++) {
            if (parseInt(inputFlavors[i].value) > 0) {
                items.innerText += flavors[i] + " " + (parseInt(inputFlavors[i].value) * 1) + "€" + " \n";
            }
        }
        for (var i = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                items.innerText += toppings[i] + " 0,15" + "€" + " \n";
            }
        }
        sum.innerText = _sum.toString() + "€";
    }
    function checkOrder(_event) {
        var target = _event.target;
        var name = document.getElementById("Name");
        var surname = document.getElementById("Surname");
        var street = document.getElementById("Street");
        var housenumber = document.getElementById("Housenumber");
        var postcode = document.getElementById("Postcode");
        var place = document.getElementById("Place");
        var mail = document.getElementById("Mail");
        var pickup = document.getElementById("Pickup");
        var delivery = document.getElementById("Delivery");
        var scoopcounter = document.getElementById("ScoopCounter");
        if (target.id == "checkOrder") {
            //  ############  Anzahl der Kugeln ###
            if (scoopcounter.validity.valid == false) {
                document.getElementById("ErrorScoops").style.display = "inline";
            }
            // ############  Lieferung        
            if (pickup.checked == true && delivery.checked == true)
                document.getElementById("ErrorDeliveryoptions").style.display = "inline";
            // ############  Kundendaten #####
            if (name.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                name.style.backgroundColor = "red";
            }
            if (surname.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                surname.style.backgroundColor = "red";
            }
            if (street.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                street.style.backgroundColor = "red";
            }
            if (housenumber.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                housenumber.style.backgroundColor = "red";
            }
            if (postcode.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                postcode.style.backgroundColor = "red";
            }
            if (place.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                place.style.backgroundColor = "red";
            }
            if (mail.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                mail.style.backgroundColor = "red";
            }
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=Aufgabe9.js.map