//Aufgabe: Aufgabe 9
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 21.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Form {
    window.addEventListener("load", init);

    let flavorsArray: string[] = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    let toppingsArray: string[] = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant", "Kein Topping"];
    let waffelCupArray: string[] = ["Waffel", "Becher"];

    let flavorsDiv: HTMLElement;
    let toppingsDiv: HTMLElement;
    let waffelCupDiv: HTMLElement;
    let ordersummary: HTMLElement;
    let checkOrder: HTMLElement;

    let selectedIcecream: HTMLSelectElement[] = [];
    let icecream: HTMLOptionElement[] = [];
    let inputToppings: HTMLInputElement[] = [];
    let radioWaffelCup: HTMLInputElement[] = [];
    let inputStepper: HTMLInputElement[] = [];
    let inputsDelivery: HTMLInputElement[] = [];
    let selectListe: string[] = [];

    function init(_event: Event): void {

        flavorsDiv = document.getElementById("Flavors");
        toppingsDiv = document.getElementById("Toppings");
        waffelCupDiv = document.getElementById("WaffelOrCup");
        ordersummary = document.getElementById("OrderSummary");
        checkOrder = document.getElementById("checkOrder");
        createIcecream();
        
        checkOrder.addEventListener("click", checkFormular);
        ordersummary.addEventListener("change", change);
    }
    // ##### Bestellung mit Button überprüfen ##    
    function checkFormular(_event: Event): void {

        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let surname: HTMLInputElement = <HTMLInputElement>document.getElementById("Surname");
        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("Street");
        let housenumber: HTMLInputElement = <HTMLInputElement>document.getElementById("Housenumber");
        let postcode: HTMLInputElement = <HTMLInputElement>document.getElementById("Postcode");
        let place: HTMLInputElement = <HTMLInputElement>document.getElementById("Place");
        let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("Mail");
        let pickup: HTMLInputElement = <HTMLInputElement>document.getElementById("Pickup");
        let delivery: HTMLInputElement = <HTMLInputElement>document.getElementById("Delivery");

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

        let iceSorts: number = 0;
        let behaelter: number = 0;

        for (let i: number = 0; i < selectedIcecream.length; i++) {
            if (parseInt(selectedIcecream[i].value) > 0)
                iceSorts += 1;
        }

        if (iceSorts == 0)
            document.getElementById("ErrorSorts").style.display = "inline";

        else {
            alert("Vielen Dank für Ihre Bestellung!");
            location.reload();
        }
    }
    // ###    
    function createIcecream(): void {
        createSelect();
        for (let i: number = 0; i < waffelCupArray.length; i++) {
            createRadioWaffelCup(waffelCupArray[i]);
        }
        for (let i: number = 0; i < toppingsArray.length; i++) {
            createInputToppings(toppingsArray[i]);
        }
        createStepper();
    }

    function createSelect(): void {
        let select: HTMLSelectElement = document.createElement("select");
        for (let i: number = 0; i < flavorsArray.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.text = flavorsArray[i];
            option.value = flavorsArray[i];
            select.appendChild(option);
            selectListe.push(flavorsArray[i]);
            icecream.push(option);
        }
        document.getElementById("Flavors").appendChild(select);
    }

    function createStepper(): void {
        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.min = "1";
        stepper.max = "10";
        stepper.value = "1";
        stepper.step = "1";
        document.getElementById("Scoops").appendChild(stepper);
        inputStepper.push(stepper);
    }

    function createRadioWaffelCup(_behaelter: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _behaelter;
        waffelCupDiv.appendChild(label);
        radioWaffelCup.push(input);
    }

    function createInputToppings(_topping: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
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

    function change(): void {

        let sum: number = 0;
        for (let i: number = 0; i < icecream.length; i++) {
            sum += parseInt(icecream[i].value);
        }
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked)
            { sum += 0.15; }
        }
        for (let i: number = 0; i < radioWaffelCup.length; i++) {
            if (radioWaffelCup[i].checked)
            { sum += 0; }
        }
        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[0].checked)
            { sum += 0; }
        }

        changeShoppingcard(sum);

    }

    function changeShoppingcard(_sum: number): void {
        let ordersummary: HTMLElement = document.getElementById("OrderSummary");
        ordersummary.innerText = "";

        for (let i: number = 0; i < icecream.length; i++) {
            if (parseInt(icecream[i].value) > 0) {
                ordersummary.innerText += flavorsArray[i] + " - " + (parseInt(icecream[i].value) * 1) + " Euro" + "\n";
            }
        }

        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                ordersummary.innerText += toppingsArray[i] + " - 15 Cent" + "\n";
            }
        }

        for (let i: number = 0; i < radioWaffelCup.length; i++) {
            if (radioWaffelCup[i].checked) {
                ordersummary.innerText += waffelCupArray[i] + " - Keine Extrakosten" + "\n";
            }
        }


        let displaySum: HTMLElement = document.getElementById("Sum");
        displaySum.innerText = _sum.toString() + " Euro";

    }




}