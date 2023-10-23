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
const roundCounterHtml = document.querySelector(".roundCounterHtml");
const totalEnding = document.getElementById("totalEnding");
let dices = [];
let selectDices = [];
let roundCounter = 0;

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
    switchCheck();
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






//fonction de relance des dés
let restartDices = () => {
    dices = [];
    switchCheck();
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

//fonction compteur et condition pour les manches
let counterClick = () => {
    roundCounter++;
    roundCounterHtml.innerHTML = `${roundCounter}/3`
    if(roundCounter === 3) {
        roundCounter = 0;
        // btnStart.classList.remove("d-none");
        // btnRestart.classList.add("d-none");
    } 
}


//fonction switch 
let calculatePoints=(selectDices,operation)=>{
    switch(operation){
    // pour le cumul des 1
        case "total1":
            if (selectDices.includes(1)){
                console.log("présence de :" + 1);
                let total1 = document.getElementById("total1")
                } else {
                console.log("absence de 1");
                }
            break;
    // pour le cumul des 2
        case "total2":
            if (selectDices.includes(2)){
                console.log("présence de :" + 2);
                let total2 = document.getElementById("total2")
                } else {
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
                } else {
                }
        break;
        case "brelan": 
            const brelanClick = document.getElementById("brelan")
            for (let index = 0; index < selectDices.length; index++) {
                const numberIsOk = selectDices[index];
            
                // On utilise la méthode .filter pour rechercher combien de fois le nombre contenu dans numberIsOk est présent dans le tableau. .filter créer un nouveau tableau c'est sur lui que l'on effectue la recherche. Ce tableau est créer avec tous les éléments qui renvoi "true" lors .filter :
                
                const howMuchOfNumber = selectDices.filter(dice =>dice === numberIsOk).length;
                
                // Si le nombre présent dans numberIsOk est égale ou SUPERIEUR à trois on le stock dans un constante "Brelan". 
                if (howMuchOfNumber >= 3) {
                    const resultBrelan = numberIsOk*3;
                    brelanClick.addEventListener("click",() => {
                        points.brelan = resultBrelan
                        brelanClick.innerHTML = points.brelan
                        return points
                    })
                } else {
                    brelanClick.addEventListener("click",() => {
                        points.brelan = 0
                        brelanClick.innerHTML = points.brelan
                        return points
                    })
                }
            }
        break;
        case "carre":
            const carreClick = document.getElementById("carre")
            for (let index = 0; index < selectDices.length; index++) {
                
                const squareIsOk = selectDices[index];
                console.log(squareIsOk,"log de squareIsOk");
                const squareHowMuchOfNumber = selectDices.filter(dice => dice === squareIsOk).length;
                console.log(squareHowMuchOfNumber,"log de squareHowMuchOfNumber");
                if (squareHowMuchOfNumber >= 4) {
                    const square = squareIsOk * 4;
                    carreClick.addEventListener("click",() => {
                        points.carre = square
                        carreClick.innerHTML = points.carre
                        return points
                    })
                }
            }
        break;
        case "full":

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



const operation = ["total1","total2", "total3", "total4", "total5", "total6", "full", "petiteS", "grandeS", "yams", "chance", "brelan", "carre"]

let switchCheck = () => {
    for (let index = 0; index < operation.length; index++) {
        calculatePoints(selectDices,operation[index])
    }
}



let points = {
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


// let totalSum = () => {
//     const sumPoints = points.reduce()
//     totalEnding.innerHTML = sumPoints
// }

// totalSum()





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
            switchCheck();
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

btnStart.addEventListener("click", displayRandomDicesNumber);
btnRestart.addEventListener("click", counterClick);