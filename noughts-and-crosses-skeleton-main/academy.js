// Make your changes to store and update game state in this file

let isNought = true
let counter = 0
var board = [[null, null, null], [null, null, null], [null, null, null]]


// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    //PvP
    // if (isNought && board[row][column] == null){
    //     board[row][column] = "nought"
    //     isNought = false
    //     counter += 1
    // }else if(board[row][column] == null){
    //     board[row][column] = "cross"
    //     isNought = true
    //     counter += 1
    // }


    //PvC
    if (board[row][column] == null){
        board[row][column] = "nought"
        counter += 1
        console.log(counter)
        if(counter >= 5) return
        // AITurn_random()
        AITurn_op()
    }


    console.log("takeTurn was called with row: "+row+", column:"+column);
}

function AITurn_random(){
    let isPlayed = false

    while(!isPlayed){

        // if(counter >= 9){
        //     isPlayed = true
        //     break
        // }
        let i = Math.floor(Math.random() * (2 - 0 + 1))

        let j = Math.floor(Math.random() * (2 - 0 + 1))
        if(board[i][j] == null)
        {
            board[i][j] = "cross"
            isPlayed = true
        }
    }
    console.log("AI takes the turn")
}


function AITurn_op(){
    // check to see if a win is possible
    // check to see if opponent can win
    for (let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){

        if ((i == 0 && j == 0)||(i == 0 && j == 2)||(i == 2 && j == 0)||(i == 2 && j == 2)) continue
        if ((j==0)||(j==2)){
            //checking vertical direction
            if((board[i-1][j] == board[i][j])&&(board[i][j] != null) && (board[i+1][j]==null)){
                board[i+1][j]="cross"
                return
            }else if((board[i+1][j] == board[i][j])&&(board[i][j]!=null) && (board[i-1][j]==null)){
                board[i-1][j] = "cross"
                return
            }else if((board[i-1][j] == board[i+1][j])&&(board[i-1][j]!=null) && (board[i][j]==null)){
                board[i][j] = "cross"
                return
            }

        }else if ((i==0)||(i==2)){
            //checking horizontal direction
            if ((board[i][j-1] == board[i][j])&& (board[i][j] != null) && (board[i][j+1]==null)) {
                board[i][j+1] = "cross"
                return
            }else if ((board[i][j+1] == board[i][j])&& (board[i][j] != null) && (board[i][j-1]==null)){
                board[i][j-1] = "cross"
                return
            }else if((board[i][j+1] == board[i][j-1])&& (board[i][j+1] != null) && (board[i][j]==null)){
                board[i][j] = "cross"
                return
            }
        }else {
            // checking horizontal direction
            if ((board[i][j-1] == board[i][j])&& (board[i][j] != null) && (board[i][j+1]==null)) {
                board[i][j+1] = "cross"
                return
            }else if ((board[i][j+1] == board[i][j])&& (board[i][j] != null) && (board[i][j-1]==null)){
                board[i][j-1] = "cross"
                return
            }else if((board[i][j+1] == board[i][j-1])&& (board[i][j+1] != null) && (board[i][j]==null)){
                board[i][j-1] = "cross"
                return


            //checking vertical direction
            }else if((board[i-1][j] == board[i][j])&&(board[i][j] != null) && (board[i+1][j]==null)){
                board[i+1][j]="cross"
                return
            }else if((board[i+1][j] == board[i][j])&&(board[i][j] != null) && (board[i-1][j]==null)){
                board[i-1][j] = "cross"
                return
            }else if((board[i-1][j]==board[i+1][j])&&(board[i-1][j]!=null) && (board[i][j]==null)){
                board[i][j]
                return



                //checking right diagonal direction 
            }  
            else if((board[i+1][j-1] == board[i][j])&&(board[i][j] != null) && (board[i-1][j+1] == null)){
                board[i-1][j+1] = "cross"
                return
            }else if((board[i+1][j-1] == board[i-1][j+1])&&(board[i+1][j-1] != null) && (board[i][j] == null)){
                board[i][j] = "cross"
                return
            }else if((board[i-1][j+1] == board[i][j])&&(board[i][j] != null) && (board[i+1][j-1] == null)){
                board[i+1][j-1] = "cross"
                return



                //checking left diagonal direction 
            }else if((board[i-1][j-1] == board[i][j])&&(board[i][j]!=null)&&(board[i+1][j+1]==null)){
                board[i+1][j-1] = "cross"
                return
            }else if((board[i-1][j-1] == board[i+1][j+1])&&(board[i+1][j+1]!=null)&&(board[i][j]==null)){
                board[i][j] = "cross"
                return
            }else if((board[i+1][j+1] == board[i][j])&&(board[i+1][j+1]!=null)&&(board[i-1][j-1]==null))
            {
                board[i-1][j-1] = "cross"
                return
            }
        }


            // play in the centre if possible

    // play in a corner is possible

    // play anywhere else
    }
    
    if (board[1][1]==null){
        board[1][1] = "cross"
        return
    }

}
AITurn_random()


}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");

    for (let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j] !== null){
                if ((i == 0 && j == 0)||(i == 0 && j == 2)||(i == 2 && j == 0)||(i == 2 && j == 2)) continue
                if ((j==0)||(j==2)){
                    //checking vertical direction
                    if((board[i-1][j] == board[i][j])&&(board[i+1][j] == board[i][j])) return board[i][j]
                        

                }else if ((i==0)||(i==2)){
                    //checking horizontal direction
                    if ((board[i][j-1] == board[i][j])&&(board[i][j+1] == board[i][j])) return board[i][j]
                }else{
                    // checking horizontal direction
                    if ((board[i][j-1] == board[i][j])&&(board[i][j+1] == board[i][j])){
                        return board[i][j]
                    }else if((board[i-1][j] == board[i][j])&&(board[i+1][j] == board[i][j])){
                        //checking vertical direction
                        return board[i][j]
                    }else if((board[i+1][j-1] == board[i][j])&&(board[i-1][j+1] == board[i][j])){
                        //checking right diagonal direction 
                        return board[i][j]
                    }else if((board[i-1][j-1] == board[i][j])&&(board[i+1][j+1] == board[i][j])){
                        //checking left diagonal direction 
                        return board[i][j]
                    }
                }
            }
        }
    }
    for (let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j]==null)
            {
                return null
            }else if((i==2) && (j ==2)){
                return "nobody"
            }
        }
    }
}

// Set the game state back to its original state to play another game.
function resetGame() {
    isNought = true
    board = [[null, null, null], [null, null, null], [null, null, null]]
    counter = 0
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}

