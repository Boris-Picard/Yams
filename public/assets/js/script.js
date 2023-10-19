//Teddy 





//variables





//fonctions






//Thibaud





//variables






//fonctions










//Boris


//variables
let diceHtml = document.querySelectorAll(".diceHtml");        
const btnStart = document.querySelector(".btnStart");
let dices = [];
let selectDices = [];
let keepDice = [];

//fonctions
let dicesRandomNumber = () => { 
    for (let index = 0; index < 5; index++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        dices.push(dice);
    };
    return dices
};


let displayDices = () => {
    dices = [];
    const newDices = dicesRandomNumber()
    console.log(newDices.length);
    for(i = 0;i < newDices.length ; i++){
        diceHtml[i].innerHTML = newDices[i];
    }
};


btnStart.addEventListener("click", displayDices);

let clickUser = 1;
let selectDiceClick = () => {
    diceHtml.forEach((dice) => {
    dice.addEventListener("click", (event) => {
    event.target.classList.add("text-bg-danger");
    console.log(clickUser);
    selectDices.push(dice.innerHTML)
    console.log(selectDices);
    if(clickUser%2 == 1 ) {
        clickUser++
        console.log(clickUser);
        console.log("impair");
        return selectDices;
    } else if (clickUser%2 == 0) {
        clickUser++
        console.log(clickUser);
        console.log("pair");
        event.target.classList.remove("text-bg-danger");
        
    }
        });
    });
};
selectDiceClick()

let keepSelectDice = () => {
    keepDice = selectDiceClick()
    
}


// Savoir combien de dés il nous reste en fonction du nombre de dés gardés :

// let remainingDices = 5 - selectDices.length ;

// console.log(remainingDices);



