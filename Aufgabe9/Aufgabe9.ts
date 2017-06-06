namespace Form {
    window.addEventListener("load", init);
    let fieldset: HTMLFieldSetElement;
    //Arrays 
    let flavors: string[] = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    let toppings: string[] = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant"];
    // Arrays wo die ausgewählten Elemente gespeichert werden
    let inputFlavors: HTMLOptionElement[] = [];
    let inputToppings: HTMLOptionElement[] = [];

    // Elemente aus dem HTML Dokument
    let waffelButton: HTMLElement = document.getElementById("Waffel");
    let cupButton: HTMLElement = document.getElementById("Cup");
    let newFlavorButton: HTMLElement = document.getElementById("AddIcecream");
    let checkButton: HTMLElement = document.getElementById("checkOrder");


    function init(_event: Event): void {
        fieldset = document.getElementsByTagName("fieldset")[1];


        // Waffel oder Becher auswählen
        document.addEventListener("click", chooseDarreichungsform);

        // Eissorte hinzufügen
        //        document.addEventListener("click", addFlavor);

        // Eissorten einfügen 
        createFlavors();

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
    function createFlavors(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < flavors.length; i++) {
            console.log(flavors[i]);
            createFlavor(flavors[i]);
        }
    }

    // Select Felder mit den Eissorten beschriften
    function createFlavor(_sort: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulÃ¶sen
        let select = document.getElementById("Flavours");
        let option: HTMLOptionElement = document.createElement("option");

        option.innerText = _sort;
        select.appendChild(option);
        option.value = "1";


        inputFlavors.push();
    }
    
//Eissorte hinzufügen    
//function addFlavor(_event :Event) :void{    //        let select: HTMLSelectElement = document.createElement("select");
    //        let option: HTMLOptionElement = document.createElement("option");    //        let input: HTMLInputElement = document.createElement("input");
    //        
    //        option.innerText = _sort;
    //        select.name = "Flavor";
    //        select.appendChild(i);    // 
    //    //    
//}
    
    // -------------------------------------------------- Toppings ------------------------------------------------------
function createCheckbox(_verzierung: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _verzierung;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _verzierung;

        verzierungen.appendChild(label);
        inputVerzierung.push(input);
    } }



    function change(): void {
        let sum: number = 0;
        let display = document.getElementById("Sum");

        for (let i: number = 0; i < inputFlavors.length; i++) {
            sum += parseInt(inputFlavors[i].value);
        }
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked)
            { sum += 1.5; }
        }       }    

function updateShoppingCard(): void {
    

}


}