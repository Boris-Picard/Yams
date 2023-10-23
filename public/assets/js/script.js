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
let getKeepDice = [] ;
let brelan ;

//fonctions
// L'utilisateur peut garder un nombre de dés entre 1 et 5 :

/////////////////////////Valeurs en dur ://///////////////////////////
selectDices = [3,3,2,2,2] ;

// Stocker le résultat des dés que l'utilisateur va garder dans une variable: 
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

// ==================== Brelan ====================
// Brelan : Cumul des 3 identiques :
// On parcours le tableau avec une boucle for :
for (let index = 0; index < getKeepDice.length; index++) {
    const numberIsOk = getKeepDice[index];

    // On utilise la méthode .filter pour rechercher combien de fois le nombre contenu dans numberIsOk est présent dans le tableau. .filter créer un nouveau tableau c'est sur lui que l'on effectue la recherche. Ce tableau est créer avec tous les éléments qui renvoi "true" lors .filter :
    
    const howMuchOfNumber = getKeepDice.filter(dice =>dice === numberIsOk).length;

    // Si le nombre présent dans numberIsOk est égale ou SUPERIEUR à trois on le stock dans un constante "Brelan". 
    if (howMuchOfNumber >= 3) {
        const brelan = numberIsOk*3;
        // console.log(brelan);
        // console.log("Vous avez un Brelan");
        break;
    }
}


// ==================== Carée ==================== 
// Carré cumul des 4 dés identiques :  
for (let index = 0; index < getKeepDice.length; index++) {
    const squareIsOk = getKeepDice[index];
    // console.log(squareIsOk,"log de squareIsOk");
    const squareHowMuchOfNumber = getKeepDice.filter(dice => dice === squareIsOk).length;
    // console.log(squareHowMuchOfNumber,"log de squareHowMuchOfNumber");
    if (squareHowMuchOfNumber >= 4) {
        const square =squareIsOk * 4 ;
        // console.log(square);
        console.log("Vous avez un Carré");
    }
}


// ==================== Full ==================== 
// Full : une Paire et un Brelan (25 points) :

// En fait une boucle pour la Paire :
for (let index = 0; index < getKeepDice.length; index++) {
    const pairIsOk = getKeepDice[index];
    console.log(pairIsOk, "log de pairIsOk");
    const pairHowMuchOfNumber = getKeepDice.filter(dice => dice === pairIsOk).length;
    console.log(pairHowMuchOfNumber,"log de pairHowMuchOfNumber");
    if ( pairHowMuchOfNumber == 2 ) {
        const pair = pairIsOk * 2 ;
        console.log(pair);
        console.log("Vous avez une Paire");
    }
}








// Cumul la valeur des dés :
let getSumDices  = () => {
    let sumDices = dices[0]+dices[1]+dices[2]+dices[3]+dices[4]
    return sumDices ;
}
// console.log(getSumDices());