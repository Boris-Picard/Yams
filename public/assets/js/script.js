const diceHtml = document.querySelectorAll(".diceHtml");     
const btnStart = document.querySelector(".btnStart");
const btnRestart = document.querySelector(".btnRestart");
const btnValid = document.querySelector(".btnValid");
let dices = [];
let selectDices = [];


let randomDicesNumber = () => {
    for (let index = 0; index < 5; index++) {
        dices.push(Math.floor(Math.random() * 6) + 1);
        console.log(dices);
    };
    return dices
};

let displayRandomDicesNumber = () => {
    randomDicesNumber();
    for (let index = 0; index < 5; index++) {
        diceHtml[index].innerHTML = dices[index];
        btnStart.classList.add("d-none")
    };
};

btnStart.addEventListener("click", displayRandomDicesNumber);

/* fonction qui permet au clic de supprimer un nombre de [dices] et le mettre dans [selectDices] et inversement
parseint permet d'extraire le nombre a l'intérieur du dé sur lequel l'user clique qui avec innerhtml était un string et re devient un nombre
et donc de faire marcher la méthode indexOf*/
let getNumberActiveDice = () => {
    diceHtml.forEach((dice, index) => {
        dice.addEventListener("click", () => {
            dice.classList.toggle("active");
            let clickArrayNumber = parseInt(dice.innerHTML);
            let indexInDices = dices.indexOf(clickArrayNumber);
            let indexInSelectDices = selectDices.indexOf(clickArrayNumber);
            if(dice.classList.contains("active")) {
                dices.splice(indexInDices, 1);
                selectDices.push(clickArrayNumber);
                return selectDices;
            } else {
                selectDices.splice(indexInSelectDices, 1);
                dices.push(clickArrayNumber);
                return dices;
            };
        });
    });
};


getNumberActiveDice()


//fonction de relance des dés
let restartDices = () => {
    dices = [];
    diceHtml.forEach((dice, index) => {
        if(!dice.classList.contains("active")) {
            let diceValue = Math.floor(Math.random() * 6) + 1;
            dices[index] = diceValue;
            diceHtml[index].innerHTML = dices[index];
        };
    });
    return selectDices;
};

btnRestart.addEventListener("click",  restartDices);
