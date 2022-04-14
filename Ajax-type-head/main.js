const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json()) // take the raw data and convert to JSON (check the properties of the file(JSON is an opition))
  .then(data => cities.push(...data)); // take the JSON and get the data
                                      // the ...(spread) will take the data and pass it in as a single array

function findMatches(wordToMatch, cities) {
  return cities.filter(place => { //by using filter we can break down the original array (over 1000 cities) into diffrent smaller sections
      // need to figure out if the city or state what was searched
      // we neet to use regex because when searching it will be a varible...We put a varbile into a regex outside of the match function
      const regex = new RegExp(wordToMatch, 'gi'); // the g is the global flag (it will look through entire sting ) and i (insenstive/ will find regardless of case...)
      return place.city.match(regex) || place.state.match(regex);
  });

}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl"> ${this.value} </span>` );
    return `
      <li>
        <span class="name">${place.city}, ${place.state} </span>
        <span class="population">${place.population} </span>
      </li>
    `;
  }).join(''); // will turn from array into string
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const searchSuggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // will display the matches (after you click off the form... Its just listing for the change)
searchInput.addEventListener('keyup', displayMatches); // this will update and show results when you are typing them in the consol
