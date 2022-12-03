/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/
let developers = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
]
// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
function countFromEurope(developers) {
    EuropeanDeveloper = developers.filter((developer) => developer.continent == `Europe`);
    return EuropeanDeveloper.length
}
console.log(countFromEurope(developers))
// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Lukas, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
function getGreetings(developers) {
    return developers.map((entry) => `Hi ${entry.firstName}, what do you like the most about ${entry.language}`)
}
console.log(JSON.stringify(getGreetings(developers)))
// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
function isJSComing(developers) {
    jsDevelopers = developers.filter((entry) => entry.language == `Javascript`);
    return jsDevelopers.length >= 1 ? true : false;
}
console.log(isJSComing(developers))
// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Lukas, Croatia'
function getFirstPythonDeveloper(developers) {
    pythonDevelopers = developers.filter((entry) => entry.language == `Python`)
    return pythonDevelopers.length >= 1 ? `${pythonDevelopers[0].firstName}, ${pythonDevelopers[0].country}` : `none`;
}
console.log(getFirstPythonDeveloper(developers))
// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.

const addAge = (total, developer) => total + developer.age
function getAverageAge(developers) {
    if (developers.length == 0) {
        return -1;
    } else {
        ageTotal = 0
        let totalAge = developers.reduce(addAge, ageTotal)
        return Math.floor(totalAge / developers.length)
    }
}
console.log(getAverageAge(developers))
// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
function getLanguageCounts(developers) {
    let result = {}
    developers.forEach((entry)=>{
        language = entry.language
        if(language in result){
            result[language] = result[language] + 1
        }else{
            result[language] = 1
        }
    })
    return result
}
console.log(JSON.stringify(getLanguageCounts(developers)))
// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Lukas']
function getOldest(developers) {
    let sorted = developers.sort((developer1, developer2) => developer1.age > developer2.age ? -1 : 0)
    return sorted[0].firstName
}
console.log(getOldest(developers))
// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
function isGlobalGroup(developers) {
    let globalList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    developers.forEach(entry => {
        if(globalList.includes(entry.continent)){
            globalList = globalList.filter((c)=> c != entry.continent)
        }
    });
    return globalList.length==0? true:false
}
console.log(isGlobalGroup(developers))
// askForMissingDetails should return a list of questions that need answering to fill in missing details from the developers (fields whose values are null)
// For example, if you receive:
// [
//      { firstName: 'Sofia', lastName: 'I.', country: null, continent: 'Americas', age: 34, language: 'Javascript' },
//      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
// ];
// You would return
// [
//      'Hi Sofia. What is your country?',
//      'Hi Lukas. What is your language?'
// ]
// First name will always be present on the developers. There will be at most one field missing.
// Hint: Look up Object.keys, Object.values and Object.entries

let missing = [
         { firstName: 'Sofia', lastName: 'I.', country: null, continent: 'Americas', age: 34, language: 'Javascript' },
         { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
         { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ];

function askForMissingDetails(developers) {
    let result = []
    developers.forEach((entry)=>{

        let nullKey = Object.keys(entry).filter(key=>entry[key] == null)
        
        if(Object.values(entry).includes(null)){
            let outcome = `Hi ${entry.firstName}. What is your ${nullKey}?`;
            result.push(outcome)
        }

    })
    return JSON.stringify(result)
}
console.log(askForMissingDetails(missing))

module.exports = {
    countFromEurope,
    getGreetings,
    isJSComing,
    getFirstPythonDeveloper,
    getAverageAge,
    getLanguageCounts,
    getOldest,
    isGlobalGroup,
    askForMissingDetails
}