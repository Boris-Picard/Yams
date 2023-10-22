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
selectDices = [2,2,2,3] ;

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

// ============================Brelan==========================================
// Brelan : Cumul des 3 identiques :

// On parcours le tableau avec une boucle for :
const findBrelan = () => {
    for (let index = 0; index < getKeepDice.length; index++) {
        const numberIsOk = getKeepDice[index];
        // console.log(numberIsOk,"log de numberIsOk");

        // On utilise la méthode .filter pour rechercher combien de fois le nombre contenu dans numberIsOk est présent dans le tableau :
        const howMuchOfNumber = getKeepDice.filter(dice =>dice === numberIsOk).length;
        // console.log(howMuchOfNumber,"log howMuchOfNumber");

        // Si le nombre présent dans numberIsOk est égale ou SUPERIEUR à trois on le stock dans un constante "Brelan" :
        if (howMuchOfNumber >= 3) {
            const brelan = numberIsOk*3;
            console.log(brelan);
            console.log("Vous avez un brelan");
            break;
        }
        return brelan ;
    }
}
const getBrelan = findBrelan();
console.log(getBrelan);

// Cumul la valeur des dés :
let getSumDices  = () => {
    let sumDices = dices[0]+dices[1]+dices[2]+dices[3]+dices[4]
    return sumDices ;
}
// console.log(getSumDices());