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
let pair = [] ;
let smallSuite = [] ;
let point
// Ajout perso en dur :
let dicesDur = [5,2,1,3,4] ;

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
    calculatePoints(selectDices,operation)
    randomDicesNumber();
    for (let index = 0; index < 5 ; index++) {
        diceHtml[index].innerHTML = dices[index];
        // diceImgBoard1.src = `./public/assets/img/dice${dices[index]}.png`;
        // diceImgBoard1.setAttribute("src", randomDicesImg);
        // diceImgBoard2.setAttribute("src", randomDicesImg);
        // diceImgBoard3.setAttribute("src", randomDicesImg);
        // diceImgBoard4.setAttribute("src", randomDicesImg);
        // diceImgBoard5.setAttribute("src", randomDicesImg);
        // diceImgBoard6.setAttribute("src", randomDicesImg);
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
                calculatePoints(selectDices,operation)
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


const points = {
    "total1": false,    
    "total2": false,
    "total3": false,
    "total4": false,
    "total5": false,
    "total6": false,
    "brelan": false,
    "carre": false,
    "full": false,
    "petiteS": false,
    "grandeS": false,
    "yams": false,
    "chance": false,
}

// for (let index = 0; index < dicesDur.length; index++) {
//     const fullIsOk = dicesDur[index];
//     // console.log(dicesDur);
//     const fullHowMuchOfNumber = dicesDur.filter(dice => dice === fullIsOk).length;
//     console.log(fullHowMuchOfNumber,"log de fullHowMuchOfNumber");
    
//     if ( fullHowMuchOfNumber == 3 && fullHowMuchOfNumber !=2  ) {
//         const brelan = [] ;
//         brelan[index] = fullIsOk ;
//         console.log(brelan.length,"log taille du brelan");
//         // console.log(brelan,"log de brelan");
//         // console.log("Vous avez un Brelan");
//     }
//     if ( fullHowMuchOfNumber ==2  && fullHowMuchOfNumber !=3) {
//         // console.log(fullHowMuchOfNumber,"log de fullHowMuchOfNumber");
//         pair[index] = fullIsOk ;
//         console.log(pair.length,"log taille de pair");
//         // console.log(pair,"log de pair");
//         // console.log("Vous avez une Paire");
//     }
// }
//===========================Full en dur============================

// let pairFound = false;
// let brelanFound = false;
// let sumOfFull = 0 ;

// for (let index = 0; index < dicesDur.length; index++) {
//     const fullIsOk = dicesDur[index];
//     const fullHowMuchOfNumber = dicesDur.filter(dice => dice === fullIsOk).length;

//     if (fullHowMuchOfNumber >= 2 && fullHowMuchOfNumber != 3) {
//         pairFound = true;
//     }

//     if (fullHowMuchOfNumber >= 3 && fullHowMuchOfNumber != 2) {
//         brelanFound = true;
//     }
// }

// if (pairFound && brelanFound) {
//      sumOfFull = 25;
// }

// console.log(sumOfFull + " points");

//================================Petite suite en dur ==================================

let refSmallSuite = [1, 2, 3, 4, 5];
// .sort permet de classer les nombres par ordre croissant :
// Autre version sans les {} : dicesDur.sort((a, b) => a - b) ;
dicesDur.sort(function(a,b) {
    return a-b ;
})


let SmallSuiteIsOk = true;

for (const value of refSmallSuite) {
    if (!dicesDur.includes(value)) {
        SmallSuiteIsOk = false ;
        break ;
    }
}

let pointsSmallSuite = 0 ;

if (SmallSuiteIsOk) {
    pointsSmallSuite = 30 ;
}

console.log(pointsSmallSuite,"log de pointsSmallSuite")


// ==================================================
let operation = "brelan" 


//fonction switch 
const calculatePoints=(selectDices,operation)=>{
    switch(operation){
    // pour le cumul des 1
        case "total1":
            if (selectDices.includes(1)){
                console.log("présence de :" + 1);
                let total1 = document.getElementById("total1")
                total1.innerHTML = ``
                } else {
                total1.innerHTML = arrayObject["total1"]
                console.log("absence de 1");
                }
            break;
    // pour le cumul des 2
        case "total2":
            if (selectDices.includes(2)){
                console.log("présence de :" + 2);
                let total2 = document.getElementById("total2")
                total2.innerHTML = "2"
                } else {
                total2.innerHTML = arrayObject["total2"]
                console.log("absence de 2");
                }
            break;
    // pour le cumul des 3
        case "total3":
            if (selectDices.includes(3)){
                console.log("présence de :" + 3);
                } else {
                console.log("absence de 3");
                }
            break;
    // pour le cumul des 4
        case "total4":
            if (selectDices.includes(4)){
                console.log("présence de :" + 4);
                } else {
                console.log("absence de 4");
                }
        break;
    // pour le cumul des 5
        case "total5":
            if (selectDices.includes(5)){
                console.log("présence de :" + 5);
                } else {
                console.log("absence de 5");
                }
        break;
    // pour le cumul des 6
        case "total6":
            if (selectDices.includes(6)){
                console.log("présence de :" + 6);
                } else {
                console.log("absence de 6");
                }
        break;
        // case "brelan":
        //     const brelanClick = document.getElementById("brelan")
        //     for (let index = 0; index < selectDices.length; index++) {
        //         const numberIsOk = selectDices[index];
            
        //         for (let index = 0; index < selectDices.length; index++) {
        //             const numberIsOk = selectDices[index];
        //             console.log(numberIsOk);
                
        //         const howMuchOfNumber = selectDices.filter(dice =>dice === numberIsOk).length;
                
        //         // Si le nombre présent dans numberIsOk est égale ou SUPERIEUR à trois on le stock dans un constante "Brelan". 
        //         if (howMuchOfNumber >= 3) {
        //             const resultBrelan = numberIsOk*3;
        //             brelanClick.addEventListener("click",() => {
        //                 points.brelan = resultBrelan
        //                 brelanClick.innerHTML = points.brelan
        //             })
        //             console.log(brelan);
        //             console.log("Vous avez un brelan");
        //             break;
        //         } else {
        //             brelanClick.addEventListener("click",() => {
        //                 points.brelan = 0
        //                 brelanClick.innerHTML = points.brelan
        //             })
        //         }
        //     }
        // break;
        // case "carre":
        //     for (let index = 0; index < selectDices.length; index++) {
                
        //         const squareIsOk = selectDices[index];
        //         // console.log(squareIsOk,"log de squareIsOk");
        //         const squareHowMuchOfNumber = selectDices.filter(dice => dice === squareIsOk).length;
        //         // console.log(squareHowMuchOfNumber,"log de squareHowMuchOfNumber");
        //         if (squareHowMuchOfNumber >= 4) {
        //             const square =squareIsOk * 4 ;
        //             console.log(square);
        //             console.log("Vous avez un carré");
        //         }
        //     }
        // break;
        case "full":
            const fullclick = document.getElementById("full")
            for (let index = 0; index < selectDices.length; index++) {
                const fullIsOk = selectDices[index];
                const fullHowMuchOfNumber = selectDices.filter(dice => dice === fullIsOk).length;
                console.log(fullHowMuchOfNumber,"log de fullHowMuchOfNumber");
                if ( fullHowMuchOfNumber >= 2 && fullHowMuchOfNumber != 3) {
                    const pair = [] ;
                    pair[index] = fullIsOk ;
                    // console.log(pair,"log de pair");
                    console.log("Vous avez une Paire");
                }
                if ( fullHowMuchOfNumber >= 3 && fullHowMuchOfNumber !=2 ) {
                    const brelan = [] ;
                    brelan[index] = fullIsOk ;
                    // console.log(brelan,"log de brelan");
                    console.log("Vous avez un Brelan");
                }
            }
        break;
        case "petiteS":
    
        break;
        case "grandeS":
    
        break;
        case "yams":
    
        break;
        case"chance":
    
        break;
        default:
        console.log("dead");
        break;
    }
}


//addition des valeurs du tableau Dice:
let getSumDices  = () => {
    let sumDices = dices[0]+dices[1]+dices[2]+dices[3]+dices[4]
    return sumDices ;
}
//affichage du resultat du calcul des valeurs de sumDice
// console.log(getSumDices());

//afficher chaques valeurs individuellement:
for (let i = 0; i < dices.length; i++) {
    const val1 = dices[i];
    console.log(val1);
}


