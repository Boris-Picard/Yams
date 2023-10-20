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
const btnValid = document.querySelector(".btnValid")
let dices = [];
let selectDices = [];
// let keepDice = [];

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
            clickUser++;
            if(clickUser%2 == 1) {
                selectDices.push(dice.innerHTML)
                return selectDices;
            } else if (clickUser%2 == 0) {
                let lastDice = selectDices.indexOf(dice.innerHTML);
                let removeDice = selectDices.splice(lastDice,1);
            };
        });
    });
};
// fonction qui gére l'affichage
let displaySelectDices = () => {
    selectDiceClick();
    diceHtml.forEach((dice) => {
        let clicked = 0
        dice.addEventListener("click",() => {
            clicked++
            if(clicked%2 == 1) {
                dice.classList.add("text-bg-danger");
            } else if (clicked%2 == 0) {
                dice.classList.remove("text-bg-danger");
            };
        });
    });
};

displaySelectDices()

let keepSelectDice = () => {
    btnValid.addEventListener("click", () => {
        if ("click") {
            let remainingDices = 5 - selectDices.length ;
            console.log(selectDices);
            displayDices() - remainingDices
        };
    });
};

keepSelectDice() 

// Savoir combien de dés il nous reste en fonction du nombre de dés gardés :

// let remainingDices = 5 - selectDices.length ;

// console.log(remainingDices);



