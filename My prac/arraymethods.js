  let catFamily = ['lion','cheetah','leopard','cat']
//   length = catFamily.length
console.log(catFamily.length);

// Access elements
console.log(catFamily[1]);

// Array modification
catFamily[catFamily.length-1] = 'tiger'
console.log(catFamily)

// Change lion to jaguar
catFamily[0] = 'jaguar'
console.log(catFamily);

// Add a new value in the end of an array
catFamily.push('panther')
console.log(catFamily);

// Adding a new value at the beginning of an array
catFamily.unshift('puma')
console.log(catFamily);

// Remove a value at the end of an array
catFamily.pop()
console.log(catFamily);

// Remove a value at the beginning of an array 
catFamily.shift()
console.log(catFamily);

// IndexOf arrays
console.log(catFamily.indexOf('cheetah'));

// Print cheetah
console.log(catFamily[catFamily.indexOf('cheetah')]);

// Join array elements together
let nem = ['Paul','Bwayo']
console.log(nem.join(' '))


let parents = ['Ann','David']
let sisters = ['Faith','Blessings','Eshter']
let brothers = ['Ephraim','Isaiah']
family = parents.concat('sisters','brothers')
console.log(family);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(4, 2, 'May');
console.log(months);

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

// isArray()method
console.log(Array.isArray(months));

// Includes()  
console.log(months.includes('March'));