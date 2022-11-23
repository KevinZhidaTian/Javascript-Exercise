/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    if(!text || n<=0){
        return text
    }
    while(n--){
        encrypted = ``
        for (let i=1; i<text.length; i+=2){
            encrypted += text[i]
        }
        for (let i=0; i<text.length; i+=2)
        {
            encrypted += text[i]
        }
        text = encrypted
    }
    return text
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    if(!cipherText || n <= 0)
    {
        return cipherText
    }

    while(n--){
        cipherText = cipherText.split("")

        ciphered = cipherText.slice(0, cipherText.length/2)
        temp = cipherText.slice(cipherText.length/2, cipherText.length)


        for (let i = 0; i<cipherText.length;i+=2)
        {
            ciphered.splice(i,0,temp[0])
            temp.shift()
        }

        cipherText = ciphered.join("")
    }
    return cipherText
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt