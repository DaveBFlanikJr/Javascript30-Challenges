const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];



// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19)
//     return true;
// });

// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 19;
// });

const isAdult = people.some(person => ((new Date()).
getFullYear()) - person.year >= 19);
console.log({isAdult});
// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => ((new Date()).
    getFullYear()) - person.year >= 19);
console.log({allAdult});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// const thatComment = comments.find(comment => {
//   if(comment.id === 823423) {
//     return comment.text
//   }
// });

const thatComment = comments.find(comment => comment.id === 823423);

console.log(thatComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index); // find the array number (where it is)

// comments.splice(index, 1); one way to do it

const newComments = [  //create a new array of updated comments           /// Dont forget to spread the intems into the new array
 ... comments.slice(0, index), // copy of comments before to the inex
 ... comments.slice(index + 1) // start at index + 1 and go until the end
];
