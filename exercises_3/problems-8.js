/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    sequence = sequence.split("")
    // console.log(sequence)
    let finished = false
    while(!finished){
        finished = true
        if(sequence.length==0)
        {
            finished = true
        }
        for(let i=0; i<sequence.length-1; i++){
            if (sequence[i].toUpperCase() === sequence[i+1].toUpperCase()){
                if (sequence[i] !== sequence[i+1])
                {
                    finished = false
                    // console.log(sequence[i])
                    sequence.splice(i,2)
                    // console.log(sequence)
                    break
                }
            }
        }
    }
    return sequence.join("")

}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react