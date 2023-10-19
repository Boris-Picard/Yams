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

//initialize 5 nombres random dans chaque dés 
let dicesRandomNumber = () => { 
    for (let index = 0; index < 5; index++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        dices.push(dice);
    };
    return dices
};

// fonction qui permet d'afficher les 5 dés a l'écran et de pouvoir les relancer
let displayDices = () => {
    dices = [];
    const newDices = dicesRandomNumber()
    console.log(newDices.length);
    for(i = 0;i < newDices.length ; i++){
        diceHtml[i].innerHTML = newDices[i];
    }
};

// listener du bouton relancez (les 5 dés)
btnStart.addEventListener("click", displayDices);

/* fonction qui permet de séléctionner un dé le stocker dans selectDices ou deselectionner le dé indépendamment et 
retirer sa valeur de la variable selectDices attribuer une couleur quand selectionner et la retirer*/
let selectDiceClick = () => {
    diceHtml.forEach((dice) => {
    let clickUser = 0;
    dice.addEventListener("click", () => {
    dice.classList.add("text-bg-danger");
    clickUser++;
    if(clickUser%2 == 1 ) {
        selectDices.push(dice.innerHTML)
        console.log(selectDices, "cc");
        return selectDices;
    } else if (clickUser%2 == 0) {
        dice.classList.remove("text-bg-danger");
        let lastDice = selectDices.indexOf(dice.innerHTML);
        let removeDice = selectDices.splice(lastDice,1);
        console.log(selectDices,"aa");
    };
        });
    });
};
selectDiceClick()

let keepSelectDice = () => {
    keepDice = selectDices
}

// Savoir combien de dés il nous reste en fonction du nombre de dés gardés :

// let remainingDices = 5 - selectDices.length ;

// console.log(remainingDices);



