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


let keepDiceClick = () => {
    diceHtml.forEach((dice) => {
    dice.addEventListener("click", (event) => {
    event.target.classList.add("text-bg-danger");
    selectDices.push(dice.innerHTML)
    console.log(selectDices);
        });
        return selectDices;
    });
};
keepDiceClick()


// L'utilisateur peut garder un nombre de dés entre 1 et 5 :

// selectDices = [3,5];

// Stocker le résultat des dés que l'utilisateur va garder : 
// let keepDices = () => {
//     for (let i = 0; i < selectDices.length; i++) {
//         keepDice[i] = selectDices[i]
//     }
//     return keepDice;
// }
// console.log(keepDices());

// Savoir combien de dés il nous reste en fonction du nombre de dés gardés :

// let remainingDices = 5 - selectDices.length ;

// console.log(remainingDices);



