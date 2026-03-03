const name = "ayush"
const repoCount = 4

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayush-ag-com')

// console.log(gameName[0]);
// console.table(gameName);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-6, 12)
// console.log(anotherString);

const newStringOne = "   ayush    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://chatgpt.com/";

console.log(url.replace('t','-'));
console.log(url.replaceAll('t','-'));

console.log(url.includes('http'));

console.log(gameName.split('-'));