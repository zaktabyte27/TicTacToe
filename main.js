const player = (name, symbol) =>{
    getName = () => name;
    getSymbol = () => symbol;
    return {getName, getSymbol};
}

const game = () => {
    players = []
    board = []
    players.push(player("PlayerOne","X"))
    players.push(player("PlayerTwo","O"))
    currentPlayer = players[0]
    displayBox = document.querySelector(".display")
    boxesFilled = 0
    gameFinished = false
    boxes = document.querySelectorAll(".box")
    boxes.forEach((box)=>board.push(box))
    boxes.forEach((box)=>box.addEventListener("click",(e)=>addSymbol(e.target)))
    function addSymbol(e){
        if (e.textContent == "" && gameFinished != true){
            e.textContent = currentPlayer.getSymbol()
            if (checkWinner()){
                displayBox.textContent = currentPlayer.getName()+" has won the game!"
                gameFinished = true
            }
            if (gameFinished != true){
                if (currentPlayer == players[0]){
                    currentPlayer = players[1]
                    displayBox.textContent = "Player Two's turn (O)"
                } else {
                    currentPlayer = players[0]
                    displayBox.textContent = "Player One's turn (X)"
                }
            } 
            boxesFilled+=1
            if (boxesFilled == 9 && gameFinished != true){
                gameFinished = true
                displayBox.textContent = "This game was a draw!"
            }
        }
    }
    function checkWinner(){
        //across the middle
        currentSquare = 0
        while (currentSquare != 9){
            if (board[currentSquare].textContent != ""){
                if (board[currentSquare].textContent == board[currentSquare+1].textContent && board[currentSquare].textContent == board[currentSquare+2].textContent){
                    return true
                }
            }
            currentSquare+=3
        }
        //down the middle
        currentSquare = 0
        while (currentSquare != 3){
            if (board[currentSquare].textContent != ""){
                if (board[currentSquare].textContent == board[currentSquare+3].textContent && board[currentSquare].textContent == board[currentSquare+6].textContent){
                    return true
                }           
            }
            currentSquare+=1
        }
        //diagonally left-right
        currentSquare = 0
        if (board[currentSquare].textContent != ""){
            if (board[currentSquare].textContent == board[currentSquare+4].textContent && board[currentSquare].textContent == board[currentSquare+8].textContent){
                return true 
            }
        }
        //diagonally right-left
        currentSquare = 2
        if (board[currentSquare].textContent != ""){
            if (board[currentSquare].textContent == board[currentSquare+2].textContent && board[currentSquare].textContent == board[currentSquare+4].textContent){
                return true 
            }
        }
    }
}
    
newGame = game()





