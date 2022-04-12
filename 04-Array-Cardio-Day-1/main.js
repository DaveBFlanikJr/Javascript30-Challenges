const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
  console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// const fullName = inventors.map(inventor => inventor.first + " " + inventor.last);
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//     }
//   });

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );
  console.table(ordered);
  // Why 1 and -1? When sort iterates over the array it will move it up by 1 or down by 1 after comparing the two years.
  // So the function will go through each object in the array, move them up or down until each is in the proper spot

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears =  inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a,b) => { // to sort by age we need to take two arguments
  const elder = a.passed - a.year; // for the olderst(elder)
  const junior = b.passed - b.year; // for the yongest
  return elder > junior ? -1 : 1; // if elder is grater than it will start from -1 else from 1 which will list from highest to lowest
});
console.table(oldest);

// const oldest = inventors.sort(function(a, b) {
//   const elder = a.passed - a.year;
//   const baby = b.passed - b.year;
//   return elder > baby ? -1 : 1;
//   // if( elder > baby) { // refacotr using ternirary operator
//   //   return -1;
//   // }else {
//   //   return 1;
//   // }
// });
// console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category =  document.querySelector('.mw-category'); // we have to target the dom to get this info.. So use the dev tool to target the class contaning the info we need
// const links = Array.from(category.querySelectorAll('a')); // this will give you a nodelist of a tags (links)
// // Array.from will convert nodelist => array so we can use .map

// const de = links
//               .map(link => link.textContent)
//               .filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne)  => {
  const [aLast, aFirst] = lastOne.split(', '); // going to split on a comma and space in order to just get the last name
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
  console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) =>{
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {}) // start with a black object (we are using reduce)
  // Then we loop over and see if there is a 0 (for obj)
  // if there is we incriment by one and then repeate until all objects are covered
  // if there isnt an obj its created if there was already one in increments by 1 (so 1=> cars...)
console.log(transportation);
