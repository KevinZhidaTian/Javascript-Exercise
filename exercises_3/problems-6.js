/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

function reverseVowels(reverseMe) {
    reverseMe = reverseMe.split("")
    let flag_f = 0
    let flag_e = reverseMe.length-1
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]


    while(flag_f < flag_e){
        if (vowels.indexOf(reverseMe[flag_f]) === -1){
            flag_f += 1
            continue
        }
        if(vowels.indexOf(reverseMe[flag_e]) === -1){
            flag_e -= 1
            continue
        }
        temp = reverseMe[flag_e]
        reverseMe[flag_e] = reverseMe[flag_f]
        reverseMe[flag_f] = temp

        flag_f += 1
        flag_e -= 1
    }

    return reverseMe.join("")
}
// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels