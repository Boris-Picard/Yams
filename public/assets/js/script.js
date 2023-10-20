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
// console.log(dices);
dicesRandomNumber();

let displayDices = () => {
    let i = 0;
    diceHtml.forEach((de) => {
        de.innerHTML = dices[i];
        i++;
    });
};


btnStart.addEventListener("click", displayDices);







//Teddy 





//variables





//fonctions






//Thibaud

//variables
let selectDices = [];
let keepDice = [] ;
let dicesSameValues = [] ;
let threeDices = [] ;
let twoDices = [] ;
let sameDices = [] ;
let getKeepDice = [] ;
let brelan ;






//fonctions


// L'utilisateur peut garder un nombre de dés entre 1 et 5 :

/////////////////////////Valeurs en dur ://///////////////////////////
selectDices = [1,1,1,5,5] ;

// Stocker le résultat des dés que l'utilisateur va garder : 
let keepDices = () => {
    for (let i = 0; i < selectDices.length; i++) {
        keepDice[i] = selectDices[i]
    }
    return keepDice;
}

getKeepDice = keepDices() ;
console.log(getKeepDice, "variable retour de la fonction keepDices");

// Savoir combien de dés il nous reste en fonction du nombre de dés gardés :

let remainingDices = 5 - selectDices.length ;

// console.log(remainingDices);

// ============================Brelan==========================================
// console.log(dices,"valeurs du tableau dices");

// Brelan : Cumul des 3 identiques :

//  Comparer les dés gardés entre eux pour savoir s'ils sont identiques et les stockés dans un tableau " dés identiques" :
// Pour le tableau des 5 dés, si plusieurs dés ont les mêmes valeurs, on additionne leurs valeurs



for (let index = 0; index < getKeepDice.length; index++) {
    let numberOfFive = getKeepDice.filter(number => number === 1);
    let sumOfNumber = numberOfFive.length;
    console.log(sumOfNumber);
    
    if (sumOfNumber == 3) {
    
    } else {
        console.log('Pas de 5 dans getKeepDice.');
    }
    

    

    }

    // console.log(sameDices,"valeur du tableau sameDices");
    //  console.log(threeDices, "log threeDices");
    // console.log(twoDices, "log twoDices");


//  On stock le cumul des dés qui ont la même valeur  dans une variable brelan.


// Cumul la valeur des dés :
let getSumDices  = () => {
    let sumDices = dices[0]+dices[1]+dices[2]+dices[3]+dices[4]
    return sumDices ;
}
// console.log(getSumDices());

