const diceHtml = document.querySelectorAll(".diceHtml");     
const btnStart = document.querySelector(".btnStart");
const btnRestart = document.querySelector(".btnRestart");
const btnValid = document.querySelector(".btnValid");
const diceImgBoard1 = document.querySelector(".diceImgBoard1");
const diceImgBoard2 = document.querySelector(".diceImgBoard2");
const diceImgBoard3 = document.querySelector(".diceImgBoard3");
const diceImgBoard4 = document.querySelector(".diceImgBoard4");
const diceImgBoard5 = document.querySelector(".diceImgBoard5");
const diceImgBoard6 = document.querySelector(".diceImgBoard6");
let roundCounter = 3;
let dices = [];
let selectDices = [];

// fonction pour roll 5 dices avec un nombre aléatoire
let randomDicesNumber = () => {
    for (let index = 0; index < 5; index++) {
        dices.push(Math.floor(Math.random() * 6) + 1);
        console.log(dices);
    };
    return dices;
};


// fonction qui display les dices dans le board
let displayRandomDicesNumber = () => {
    randomDicesNumber();
    for (let index = 0; index < 5 ; index++) {
        diceHtml[index].innerHTML = dices[index];
        let randomDicesImg = "./public/assets/img/dice"+dices[index]+".png";
        diceImgBoard1.setAttribute("src", randomDicesImg);
        diceImgBoard2.setAttribute("src", randomDicesImg);
        diceImgBoard3.setAttribute("src", randomDicesImg);
        diceImgBoard4.setAttribute("src", randomDicesImg);
        diceImgBoard5.setAttribute("src", randomDicesImg);
        diceImgBoard6.setAttribute("src", randomDicesImg);
        btnStart.classList.add("d-none");
        btnRestart.classList.remove("d-none");
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
                console.log(selectDices);
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



// compteur de manche
// let roundCounterRemaining = () => {
//     btnRestart.addEventListener("click", () => {
//         roundCounter--
//         console.log(roundCounter);
//         if(roundCounter === 0) {
//             btnRestart.classList.add("d-none")
//         };
//     });
// };

// roundCounterRemaining()

