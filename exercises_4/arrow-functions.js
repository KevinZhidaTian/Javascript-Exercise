// Cursor Park (anyone not typing put your cursor here)


//Rewrite this function in Arrow form:

function sayHello(firstName, lastName) {
    console.log(`sayHello: Hello ${firstName} ${lastName}`)
}
sayHello('Tom','Carabine')



//TODO make hiEveryone()
const hiEveryone = (firstName, lastName) => console.log(`sayHello: Hello ${firstName} ${lastName}`)
hiEveryone('Tom','Carabine')


// Rewrite this function in one-line terse arrow syntax:

function loadsaMoney(myWages) {
    return myWages * 10
}

//TODO make lotsofMoney()
const loadsaMoney = (myWages) => myWages*10
const resultSum = lotsofMoney(300)
console.log(`resultSum: ${resultSum}`)
