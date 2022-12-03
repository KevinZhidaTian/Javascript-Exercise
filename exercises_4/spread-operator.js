// Cursor Park (anyone not typing put your cursor here)

// Make a function that says "Hello Academy folks: Alice Bob Charles Danielle"
// function helloAcademy (person1, person2, person3, person4) {
//     console.log(`Hello Academy folks: ${person1} ${person2} ${person3} ${person4}`)
// }
const helloAcademy = (...person1) => {
    console.log(`Hello Academy folks: ${person1}`)
}

// An array of academy folks
const academyFolks = ['Alice', 'Bob', 'Charles', 'Danielle'];

helloAcademy(...academyFolks)


// Call the function that says hello with an exploded array (spread it)
//TODO

const moreAcademyFolks = [...academyFolks, `Orscar`, `Luka`]

// Add more academy folks into a new array in one line using the spread operator
//TODO

// Say hello to all the academy folks using the spread operator
//TODO
helloAcademy(...moreAcademyFolks)
//EOF
