let manScore = 0;
let machineScore = 0;
let playerSelection = "";
let roundsPlayed = 0;
let outCome = "";

document.getElementById("rock").addEventListener("click", function (){

    if (roundsPlayed >= 5 ) {
        throw new Error("Click reset to play again")
    }
    else {
        let playerSelection = "rock";
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        roundsPlayed = roundsPlayed + 1;
    }
 
    if (roundsPlayed == 5) {
        calculate_scores(manScore, machineScore);
    }
});

document.getElementById("paper").addEventListener("click", function (){

    if (roundsPlayed >= 5 ) {
        throw new Error("Click reset to play again")
    }

    else {
        let playerSelection = "paper";
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

    }
    
    roundsPlayed = roundsPlayed + 1;
    if (roundsPlayed ==5 ) {
        calculate_scores(manScore, machineScore);
    }
});

document.getElementById("scissors").addEventListener("click", function (){

    if (roundsPlayed >= 5 ) {
        throw new Error("Click reset to play again")
    }

    else {
        let playerSelection = "scissors";
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

    }
 
    roundsPlayed = roundsPlayed + 1;
    if (roundsPlayed == 5) {
        calculate_scores(manScore, machineScore);
    }
});


function computerPlay() {
    // Math.floor() function returns the largest integer less than or equal to a given number.
    // Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)

    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        
        case 2:
            return "scissors";
            break;
    }

    // if (num = 0) {
    //     return "rock";
    // }
    // else if (num = 1) {
    //     return "paper";
    // }
    // else if (num = 2) {
    //     return "scissors";
    // }
    // else {
    //     return false
    // }

}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "rock")) {
        outCome = "It is a draw, keep playing"
        print_outcome(outCome);

    }

    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        machineScore = machineScore +1;
        outCome = "You lost. Paper crushes rock, unironically!";
        print_outcome(outCome);

    }

    else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        manScore = manScore +1;
        outCome = "You Won. Rock crushes scissors!";
        print_outcome(outCome);
        
    }

    else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        manScore = manScore + 1;
        outCome = "You Won. Paper crushes rock, unironically!";
        print_outcome(outCome);
        
    }

    else if ((playerSelection == "paper") && (computerSelection == "paper")) {
        outCome = "It is a draw, keep playing";
        print_outcome(outCome);
    }

    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        machineScore = machineScore +1;
        outCome = "You Lost. Scissors crushes rock, unironically!";
        print_outcome(outCome);
        
    }

    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        manScore = manScore + 1;
        outCome = "You Won. Scissors cuts the paper";
        print_outcome(outCome);
        
    }

    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        outCome = "It is a draw, keep playing";
        print_outcome(outCome);
    }
}

function print_outcome(outCome) {
    let resultsMessage = document.querySelector(".results");
    let addH4 = document.createElement('h4')
    addH4.textContent = outCome;
    resultsMessage.appendChild(addH4);

    let rtime_man_score = document.getElementById("man-score")
    rtime_man_score.innerHTML = manScore;
    let rtime_machine_score = document.getElementById("machine-score")
    rtime_machine_score.innerHTML = machineScore;



}


function calculate_scores(manScore, machineScore) {
    if (manScore > machineScore) {
        let manWon = document.createElement('h5');
        manWon.innerHTML = "Man won!";
        document.body.appendChild(manWon);

    }

    else if (manScore == machineScore) {
        let both_drew = document.createElement('h5');
        both_drew.innerHTML = "Man and Machine Drew. Reset and Play Again!!";
        document.body.appendChild(both_drew);
    }

    else {
        let machineWon = document.createElement('h5');
        machineWon.innerHTML = "Man won!";
        document.body.appendChild(machineWon);
    }

    const reset_btn = document.createElement('button');
    reset_btn.textContent = "Reset Game";
    document.body.appendChild(reset_btn);
    reset_btn.addEventListener("click", reset_score);
}

function reset_score(){
    window.location.reload();
    
}

