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
    const cart = [];

    const glazingSelect = document.getElementById("glazing");
    const glazingText = glazingSelect.options[glazingSelect.selectedIndex].text;

    const packSelect = document.getElementById("pack-size");
    const packText = packSelect.options[packSelect.selectedIndex].text;

    cart.push(new Roll(chosenRoll, glazingText, packText, chosenRollDictionary["basePrice"]));
    console.log(cart);
}

// https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
// Used this code to understand how to find the selected text value of the dropdowns.
