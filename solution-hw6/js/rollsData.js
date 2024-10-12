const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg",
        "alt": "cinammon roll on a plate with cinnamon sticks"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg",
        "alt": "apple cinnamon roll on a plate with fork"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg",
        "alt": "raisin cinammon roll close up"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg",
        "alt": "walnut cinammon roll on plate aerial view"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg",
        "alt": "double chocolate cinammon roll on paper wrapper"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg",
        "alt": "mini strawberry cinammon rolls with strawberries on sticks"
    }    
};

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function updateCart() {

    const glazingSelect = document.getElementById("glazing");
    const glazingText = glazingSelect.options[glazingSelect.selectedIndex].text;

    const packSelect = document.getElementById("pack-size");
    const packText = packSelect.options[packSelect.selectedIndex].text;

    const roll = addNewRoll(chosenRoll, glazingText, packText, chosenRollDictionary["basePrice"]);

    saveToLocalStorage();
}


// https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
// Used this code to understand how to find the selected text value of the dropdowns.

function updateRoll(roll) {
    const rollImageElement = roll.element.querySelector('.roll-image');
    const rollTypeElement = roll.element.querySelector('#roll-type');
    const rollGlazingElement = roll.element.querySelector('#roll-glazing');
    const rollPackElement = roll.element.querySelector('#pack-size');
    const rollPriceElement = roll.element.querySelector('.cart-item-price');

    rollImageElement.src = '../assets/products/' + rolls[roll.type]["imageFile"];
    rollImageElement.alt = rolls[roll.type]["alt"];
    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackElement.innerText = "Pack Size: " + roll.size;

    const totalPrice = calculateRollPrice(roll);
    rollPriceElement.innerText = '$ ' + totalPrice.toFixed(2);

    calculateTotalPrice();

}

function calculateRollPrice(roll) {
    const glazePrice = glazingOptions[roll.glazing];
    const packPrice = packSizeOptions[roll.size];

    totalPrice = (roll.basePrice + glazePrice)*packPrice;

    return totalPrice;
}

function calculateTotalPrice() {
    let totalPrice = 0;
    for (const roll of cart) {
        totalPrice += calculateRollPrice(roll);
    }

    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = '$ ' + totalPrice.toFixed(2);
    
}

function createRoll(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.individual-cart-item');

    const cartElement = document.querySelector("#rolls-cart");
    cartElement.prepend(roll.element);

    updateRoll(roll);

    const btnRemove = roll.element.querySelector(".remove-button");
    btnRemove.addEventListener('click', () => {removeRoll(roll)});

}

function removeRoll(roll) {
    roll.element.remove();
    cart.delete(roll);

    calculateTotalPrice();

    saveToLocalStorage();
}

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);

    cart.add(roll);

    return roll;
}

var cart = new Set();

function saveToLocalStorage() {
    const rollArray = Array.from(cart);

    const rollArrayString = JSON.stringify(rollArray);

    localStorage.setItem('storedCart', rollArrayString);
    console.log(cart);
  }

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedCart');
    const rollArray = JSON.parse(rollArrayString);
    for (const rollData of rollArray) {
        addNewRoll(rollData.type, rollData.glazing, rollData.size, 
        rollData.basePrice);
    }
    calculateTotalPrice();
  }

  if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
  }

  for (const roll of cart) {
    createRoll(roll);
  }
