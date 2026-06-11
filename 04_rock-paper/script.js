const choiceBtns = document.getElementsByClassName("choice-btn");
//console.log(choiceBtns);
const usersAndComputersChoiceOutput = document.getElementById("choice-output");

const rules = {
    "scissors": "paper",
    "paper": "rock",
    "rock": "scissors",
};

function determineWinner (usersChoice, computersChoice) {
    if(usersChoice === computersChoice){
        return "Draw, no one win's!";
    }
    if(rules[usersChoice] === computersChoice){
        return "Congratulation, you have won! 🎉";
    }
    else {
        return "The computer has won! 🤖";
    }
}

function showChoices (usersChoiceValue, computersChoiceValue, resultText) {
    const usersChoice = document.createElement("p");
    usersChoice.textContent = `You have chosen:  ${usersChoiceValue}. Exellent choice!`;
    usersAndComputersChoiceOutput.appendChild(usersChoice);

    const computersChoice = document.createElement("p");
    computersChoice.textContent = `The Computer has chosen: ${computersChoiceValue}`;
    usersAndComputersChoiceOutput.appendChild(computersChoice);

    const resultElement = document.createElement("p");
    resultElement.textContent = resultText;
    usersAndComputersChoiceOutput.appendChild(resultElement);
    resultElement.classList.add("result-text");
}



for(let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].addEventListener("click", (event) => {
        if (usersAndComputersChoiceOutput) {
            usersAndComputersChoiceOutput.innerHTML = "";
        }

        const pushedBtn = event.target.textContent;

        const randomChoice = Math.floor(Math.random() * choiceBtns.length);
        const textContentRandomChoice = choiceBtns[randomChoice].textContent;

        const result = determineWinner(pushedBtn, textContentRandomChoice);

        showChoices(pushedBtn, textContentRandomChoice, result);
    });
}





