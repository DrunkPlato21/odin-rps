        //Computer plays their hand function

        function computerPlay() {
            let x = Math.floor(Math.random() * 3) + 1;
            let choice = ""

            if (x===1) {choice = "Rock"} 
            else if (x===2) {choice = "Paper"}
            else if (x===3) {choice = "Scissors"}

            return choice
        
        }

        function playRound(playerSelection, computerSelection) {

            let player = playerSelection.toLowerCase();
            let computer = computerSelection.toLowerCase();
            
            if (player === computer) {return "tie"}
            else if (player === "rock" && computer === "scissors") { return "win" }
            else if (player === "rock" && computer === "paper") { return "lose" }
            else if (player === "paper" && computer === "rock") { return "win" }
            else if (player === "paper" && computer === "scissors") { return "lose" }
            else if (player === "scissors" && computer === "rock") { return "lose" }
            else if (player === "scissors" && computer === "paper") { return "lose" }

        }

        function game(){
            

            //for (let i = 0; i<5; i++){
                let i = 0
                const computerSelection = computerPlay()
                const playerSelection = playerSelect
                let x = playRound(playerSelection, computerSelection)
                

                if (x==="win") {score++; results.textContent = "You have won! " + playerSelect + " beats " + computerSelection + "!", tally.textContent = "Player Score: "+ score, computerTally.textContent = "Computer Score: " + cpuScore}
                else if (x==="lose") {cpuScore++; results.textContent = "You have lost! " + computerSelection + " beats " + playerSelection, tally.textContent = "Player Score: "+ score, computerTally.textContent = "Computer Score: " + cpuScore}
                else if (x==="tie") {results.textContent = "You have tied! No points have been awarded."}    
                
                if (cpuScore == 5) {
                    results.textContent = "The Computer wins the Game!"

                }else if (score == 5) {
                    results.textContent = "You won the game!!!"
                }
                
            //}

            console.log("Good game! Your final score was: " + score)
        }
        

        const buttons = document.querySelectorAll('button');
        const results = document.querySelector('.results');
        const tally = document.querySelector('.score')
        const computerTally = document.querySelector('.cpuScore')
        let score = 0
        let cpuScore = 0
        let playerSelect = ""
        buttons.forEach((button) => { 

            button.addEventListener('click', () => {
                //console.log(button.className);
                playerSelect = button.className
                //results.textContent = button.className
                //console.log(results)

                game();
                
                
            })
        })

       
       // console.log(playRound(playerSelection,computerSelection))
      // console.log(game())