// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);


// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll');

const chosenRollDictionary = rolls[chosenRoll];

/* ------------------------------------------------------------------------- */

// Now, we will use the URL parameter to update our page.

// Update the header text
const headerElement = document.querySelector('#page-title');
headerElement.innerText = chosenRoll + ' Cinnamon Roll';

// Update the image + alt text
const rollImage = document.querySelector('#selected-item-image');

rollImage.src = '../assets/products/' + chosenRollDictionary["imageFile"];
rollImage.alt = chosenRollDictionary["alt"];

const priceElement = document.querySelector("#price");
priceElement.innerText = chosenRollDictionary["basePrice"];