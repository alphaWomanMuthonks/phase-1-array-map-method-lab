const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorials => {  //mapping of tutorials
    const splitted = tutorials.split(" ")//splitted the array into strings
    const cased = (splitted.map(element => element.charAt(0).toUpperCase() + element.slice(1))).join(" ")  //capitalise first letter of each string //slice the rest of the letters from the first.
    return cased;                          //join the strings back to an array //return the strings
  });
}

titleCased()






// const titleCased = function(text = []) {
//   if (text === []) {
//      return []
//    }
// text = text.split(text:string);

// for (let i = 0; i < text.length; i++) {
//   text[i] = text[i].toLowerCase().split('');
//   text[i][0] = text[i][0].toUpperCase();
//   text[i] = text[i].join('');
// }

// return text.join(' ');
// }
//   let strLowerCase = str.toLowerCase();
//   let wordArr = strLowerCase.split(" ").map(function(currentValue) {
//     return currentValue[0].toUpperCase() + currentValue.substring(1);
// });
// return wordArr.join(" ");
// }

// function toTitleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console.log(toTitleCase("WELCOME TO W3DOCS"));
