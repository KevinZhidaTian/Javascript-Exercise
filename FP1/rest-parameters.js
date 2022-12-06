// Cursor Park (anyone not typing put your cursor here)

// Lets make a function that adds all our names together
// Sam Byron Mark Masuk Megan

const addNames = (...names) => {
    return names.reduce(function (prev, curr){
        return prev+ ` `+ curr
    })
    };
// const addNames = (...names) => [names]
const resultNames = addNames('Sam', 'Byron','Mark', 'Masuk', 'Megan')

console.log(`addNames: ${resultNames}`)

console.log("As an array", resultNames)
console.log("As a string", resultNames.toString())

// EOF
