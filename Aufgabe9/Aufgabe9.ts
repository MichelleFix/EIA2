namespace Form {
    window.addEventListener("load", init);
    let fieldset: HTMLFieldSetElement;
    //Arrays 
    let flavors: string[] = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    let toppings: string[] = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant","Kein Topping"];
    // Arrays wo die ausgew�hlten Elemente gespeichert werden
    let inputFlavors: HTMLOptionElement[] = [];
    let inputToppings: HTMLInputElement[] = [];

    // Elemente aus dem HTML Dokument
    let waffelButton: HTMLElement = document.getElementById("Waffel");
    let cupButton: HTMLElement = document.getElementById("Cup");
    let newFlavorButton: HTMLElement = document.getElementById("AddIcecream");
    let checkButton: HTMLElement = document.getElementById("checkOrder");
    let checkboxToppings: HTMLElement = document.getElementById("CheckboxToppings");


    function init(_event: Event): void {
        fieldset = document.getElementsByTagName("fieldset")[1];


        // Waffel oder Becher ausw�hlen
        document.addEventListener("click", chooseDarreichungsform);

        // Eissorte hinzuf�gen
        //        document.addEventListener("click", addFlavor);

        // Erstellt quasi alles 
        createIcecream();

        fieldset.addEventListener("change", change);

    }

    // -------------------------------------------------- Waffel oder Becher ------------------------------------------------------

    function chooseDarreichungsform(_event: Event): void {
        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        let counter: HTMLInputElement = document.getElementById("ScoopCounter");

        if (target.id == "Waffel")
            counter.max = "5";
        console.log("Waffel choosen");

        if (target.id == "Cup")
            counter.max = "10";
        console.log("Cup choosen");

    }


    // -------------------------------------------------- EISSORTEN ------------------------------------------------------
    //  Eissorten erstellen
    function createIcecream(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < flavors.length; i++) {
            console.log(flavors[i]);
            createFlavor(flavors[i]);
        }

        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
    }

    // Select Felder mit den Eissorten beschriften
    function createFlavor(_sort: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let select = document.getElementById("Flavours");
        let option: HTMLOptionElement = document.createElement("option");

        option.innerText = _sort;
        select.appendChild(option);
        option.value = "1";


        inputFlavors.push();
    }     
//Eissorte hinzuf�gen            
//function addFlavor(_event :Event) :void{    //        let select: HTMLSelectElement = document.createElement("select");
    //        let option: HTMLOptionElement = document.createElement("option");    //        let input: HTMLInputElement = document.createElement("input");
    //        
    //        option.innerText = _sort;
    //        select.name = "Flavor";
    //        select.appendChild(i);    // 
    //    //    
//} 
    // -------------------------------------------------- Toppings -------------------------------------------------- 
    function createCheckbox(_verzierung: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _verzierung;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _verzierung;

        checkboxToppings.appendChild(label);
        inputToppings.push(input); 


         function change(): void {             let sum: number = 0;
             for (let i: number = 0; i < inputFlavors.length; i++) {                 sum += parseInt(inputFlavors[i].value);             }
             for (let i: number = 0; i < inputToppings.lengt; i++) {                 sum += 0.15;             }              if (cupButton.onclick ){                 sum += 0 ,1              }             else{                 none;
            }              updateShoppingCard(sum);                    
    function updateShoppingCard(): void {             let sum: HTMLElement = document.getElementById("Sum");
    let items: HTMLElement = document.getElementById("Items");
    items.innerText = "";
    
            if(cupButton.onclick) {
                items.innerText += "Becher" + " " + "0,10" + "€" + " \n";
            }
    if (waffelButton.onclick) {
                items.innerText += "Waffel" + " " + "0,00" + "€" + " \n";
            }
    
    for (let i: number = 0; i < inputFlavors.length; i++) {
                if (parseInt(inputFlavors[i].value) > 0) {
                    items.innerText += flavors[i] + " " + (parseInt(inputFlavors[i].value) * 1) + "€" + " \n";
                }
            }
    
    for (let i: number = 0; i < inputToppings.length; i++) {
                if (inputToppings[i].checked) {
                    items.innerText += toppings[i] + " 0,15" + "€" + " \n";
                }
            }
    sum.innerText = _sum.toString() + "€";
        
}

        function checkOrder(_event: Event): void {

            let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
            let surname: HTMLInputElement = <HTMLInputElement>document.getElementById("Surname");
            let street: HTMLInputElement = <HTMLInputElement>document.getElementById("Street");
            let housenumber: HTMLInputElement = <HTMLInputElement>document.getElementById("Housenumber");
            let postcode: HTMLInputElement = <HTMLInputElement>document.getElementById("Postcode");
            let place: HTMLInputElement = <HTMLInputElement>document.getElementById("Place");
            let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("Mail");
            let pickup: HTMLInputElement = <HTMLInputElement>document.getElementById("Pickup");
            let delivery: HTMLInputElement = <HTMLInputElement>document.getElementById("Delivery");
            
            //  ############  Toppings #####
            
            // ############  Lieferung #####
            
            if (pickup.checked == true && delivery.checked == true)
                document.getElementById("ErrorDeliveryoptions").style.display = "inline";
            
            // ############  Kundendaten #####
            if (name.validity.valid == false) {
                document.getElementById("ErrorCustomerData").style.display = "inline";
                firstname.style.backgroundColor = "red";
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