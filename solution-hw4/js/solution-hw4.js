let glazingOptions = [
    {
        name: 'Keep original',
        price: 0,
    },
    {
        name: 'Sugar milk',
        price: 0,
    },
    {
        name: 'Vanilla milk',
        price: 0.5,
    },
    {
        name: 'Double chocolate',
        price: 1.50,
    }
]

let packSizeOptions = [
    {
        size: '1',
        priceMultiply: 1,
    },
    {
        size: '3',
        priceMultiply: 3,
    }, 
    {
        size: '6',
        priceMultiply: 5,
    }, 
    {
        size: '12',
        priceMultiply: 10,
    }
]

let selectElementGlazing = document.querySelector('#glazing');

for (const glazeOption of glazingOptions) {
    var option = document.createElement('option');
    option.text = glazeOption.name;
    option.value = glazeOption.price;
    selectElementGlazing.add(option);
}

let selectElementPack = document.querySelector('#pack-size');

for (const sizeOption of packSizeOptions) {
    var option = document.createElement('option');
    option.text = sizeOption.size;
    option.value = sizeOption.priceMultiply;
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