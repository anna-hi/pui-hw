let glazingOptions = {
    'Keep Original': 0,
    'Sugar Milk': 0,
    'Vanilla Milk': 0.5,
    'Double Chocolate': 1.50
}

let packSizeOptions = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}

let selectElementGlazing = document.querySelector('#glazing');

for (const glazeOption in glazingOptions) {
    var option = document.createElement('option');
    option.text = glazeOption;
    option.value = glazingOptions[glazeOption];
    selectElementGlazing.add(option);
}

let selectElementPack = document.querySelector('#pack-size');

for (const sizeOption in packSizeOptions) {
    var option = document.createElement('option');
    option.text = sizeOption;
    option.value = packSizeOptions[sizeOption];
    selectElementPack.add(option);
}

function displayPrice(newPrice) {

    let priceElement = document.getElementById('price');
    priceElement.innerHTML = newPrice.toFixed(2);
}

function glazingChange(event) {
    const basePrice = chosenRollDictionary["basePrice"];
    const priceGlazeChange = parseFloat(event.target.value);

    const newPrice = (basePrice+priceGlazeChange)*selectElementPack.value;
    displayPrice(newPrice);
}

function packSizeChange(event) {
    const basePrice = chosenRollDictionary["basePrice"];
    const sizeChange = parseFloat(event.target.value);

    const newPrice = (basePrice+parseFloat(selectElementGlazing.value))*sizeChange;
    displayPrice(newPrice);
}


selectElementGlazing.addEventListener('change', glazingChange);
selectElementPack.addEventListener('change', packSizeChange);