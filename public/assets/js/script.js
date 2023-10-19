//Teddy 





//variables





//fonctions






//Thibaud

//variables
let selectDices = [];
let keepDice = [] ;







//fonctions


// L'utilisateur peut garder un nombre de dés entre 1 et 5 :

selectDices = [3,5] ;

// Stocker le résultat des dés que l'utilisateur va garder : 
let keepDices = () => {
    for (let i = 0; i < selectDices.length; i++) {
        keepDice[i] = selectDices[i]
    }
    return keepDice;
}
console.log(keepDices());

// Savoir combien de dés il nous reste en fonction du nombre de dés gardés :

let remainingDices = 5 - selectDices.length ;

console.log(remainingDices);






//Boris


//variables
let diceHtml = document.querySelectorAll(".diceHtml");
const btnStart = document.querySelector(".btnStart");
const dices = [];

//fonctions
let dicesRandomNumber = () => {
    for (let index = 0; index < 5; index++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        dices.push(dice);
    };
};
console.log(dices);
dicesRandomNumber();

let displayDices = () => {
    let i = 0;
    diceHtml.forEach((de) => {
        de.innerHTML = dices[i];
        i++;
    });
};


btnStart.addEventListener("click", displayDices);