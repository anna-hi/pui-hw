// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

console.log(params);

// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll');

console.log(chosenRoll);
const chosenRollDictionary = rolls[chosenRoll];

/* ------------------------------------------------------------------------- */

// Now, we will use the URL parameter to update our page.

// Update the header text
const headerElement = document.querySelector('#page-title');
headerElement.innerText = chosenRoll + ' Cinnamon Roll';

// Update the image + alt text
const rollImage = document.querySelector('#selected-item-image');

console.log(rollImage);
rollImage.src = '../assets/products/' + chosenRollDictionary["imageFile"];
rollImage.alt = chosenRollDictionary["alt"];

const priceElement = document.querySelector("#price");
priceElement.innerText = chosenRollDictionary["basePrice"];