// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Reduce the array to only the total age in months of all the doggie Academites
const totalAge = (total, balance) => total + balance
const startingAge = 0
const sum = someAcademitesWithAges.map(function(a){return a.age}).reduce(totalAge,startingAge)
// const sum = someAcademitesWithAges.reduce(totalAge, startingAge)
console.log(sum)

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName =(acdemite1, acdemite2) => acdemite1.name.toUpperCase()>acdemite2.name.toUpperCase()?0:-1

someAcademitesWithAges.sort(sortByName)

console.log(JSON.stringify(someAcademitesWithAges))
// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = (acdemite1, acdemite2) => acdemite1.age>acdemite2.age?-1:0
// TODO
console.log(JSON.stringify(someAcademitesWithAges.sort(sortByAges)))


// EOF
