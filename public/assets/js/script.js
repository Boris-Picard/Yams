//déclarations des selecteurs 
const diceHtml = document.querySelectorAll(".diceHtml");     
const btnStart = document.querySelector(".btnStart");
const btnRestart = document.querySelector(".btnRestart");
const roundCounterHtml = document.querySelector(".roundCounterHtml");
const totalEnding = document.getElementById("totalEnding");
const tableResultText = document.querySelectorAll(".tableResultText");
const total1 = document.getElementById("total1");
const total2 = document.getElementById("total2");
const total3 = document.getElementById("total3");
const total4 = document.getElementById("total4");
const total5 = document.getElementById("total5");
const total6 = document.getElementById("total6");
const brelanClick = document.getElementById("brelan");
const carreClick = document.getElementById("carre");
const fullClick = document.getElementById("full");
const petiteS = document.getElementById("petiteS");
const grandeS = document.getElementById("grandeS");
const yams = document.getElementById("yams");
const luck = document.getElementById("luck");

let dices = [];
let selectDices = [];
const operation = ["total1","total2", "total3", "total4", "total5", "total6", "full", "petiteS", "grandeS", "yams", "luck", "brelan", "carre"];
let roundCounter = 0;

//addition des valeurs du tableau dices:
let getSumDices  = () => {
    let sumDices = dices[0]+dices[1]+dices[2]+dices[3]+dices[4]
    return sumDices ;
}

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
    counterClick();
    for (let index = 0; index < 5 ; index++) {
        diceHtml[index].innerHTML = dices[index];
        btnStart.classList.add("d-none");
        btnRestart.classList.remove("d-none");
    };
};


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

// tableau qui contienne les points au fur et a mesure
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
    "luck": false,
};


//fonction switch 
let calculatePoints=(selectDices,operation)=>{
    switch(operation){
    // pour le cumul des 1
        case "total1":
            let sum = 0;
            if (selectDices.includes(1)){
                for (let index = 0; index < selectDices.length; index++) {
                    sum += selectDices[index];
                    points.total1 = sum;
                    total1.innerHTML = points.total1;
                };
            };
            break;
    // pour le cumul des 2
        case "total2":
            let sum2 = 0;
            if (selectDices.includes(2)){
                for (let index = 0; index < selectDices.length; index++) {
                    sum2 += selectDices[index];
                    points.total2 = sum2;
                    total2.innerHTML = points.total2;
                };
            };
            break;
    // pour le cumul des 3
        case "total3":
            let sum3 = 0;
            if (selectDices.includes(3)){
                for (let index = 0; index < selectDices.length; index++) {
                    sum3 += selectDices[index];
                    points.total3 = sum3;
                    total3.innerHTML = points.total3;
                };
                };
            break;
    // pour le cumul des 4
        case "total4":
            let sum4 = 0;
            if (selectDices.includes(4)){
                for (let index = 0; index < selectDices.length; index++) {
                    sum4 += selectDices[index];
                    points.total4 = sum4;
                    total4.innerHTML = points.total4;
                };
                };
        break;
    // pour le cumul des 5
        case "total5":
            let sum5 = 0;
            if (selectDices.includes(5)){
                for (let index = 0; index < selectDices.length; index++) {
                    sum5 += selectDices[index];
                    points.total5 = sum5;
                    total5.innerHTML = points.total5;
                };
                };
        break;
    // pour le cumul des 6
        case "total6":
            let sum6 = 0;
            if (selectDices.includes(6)){
                for (let index = 0; index < selectDices.length; index++) {
                    sum6 += selectDices[index];
                    points.total6 = sum6;
                    total6.innerHTML = points.total6;
                };
                };
        break;
        case "bonus":
        break;
        case "brelan": 
            for (let index = 0; index < selectDices.length; index++) {
                const numberIsOk = selectDices[index];
                // On utilise la méthode .filter pour rechercher combien de fois le nombre contenu dans numberIsOk est présent dans le tableau. .filter créer un nouveau tableau c'est sur lui que l'on effectue la recherche. Ce tableau est créer avec tous les éléments qui renvoi "true" lors .filter :
                const howMuchOfNumber = selectDices.filter(dice =>dice === numberIsOk).length;
                // Si le nombre présent dans numberIsOk est égale ou SUPERIEUR à trois on le stock dans un constante "Brelan". 
                if (howMuchOfNumber >= 3) {
                    const resultBrelan = numberIsOk*3;
                    points.brelan = resultBrelan;
                    brelanClick.innerHTML = points.brelan;
                };
            };
        break;
        case "carre":
            for (let index = 0; index < selectDices.length; index++) {
                const squareIsOk = selectDices[index];
                console.log(squareIsOk,"log de squareIsOk");
                const squareHowMuchOfNumber = selectDices.filter(dice => dice === squareIsOk).length;
                console.log(squareHowMuchOfNumber,"log de squareHowMuchOfNumber");
                if (squareHowMuchOfNumber >= 4) {
                    const square = squareIsOk * 4;
                    points.carre = square;
                    carreClick.innerHTML = points.carre;
                }
            }
        break;
        case "full":
            for (let index = 0; index < selectDices.length; index++) {
                const fullIsOk = selectDices[index];
                const fullHowMuchOfNumber = selectDices.filter(dice => dice === fullIsOk).length;
                console.log(fullHowMuchOfNumber,"log de fullHowMuchOfNumber");
                if ( fullHowMuchOfNumber >= 2 && fullHowMuchOfNumber != 3) {
                    const pair = [];
                    pair[index] = fullIsOk ;
                    points.full = 25;
                    fullClick.innerHTML = points.full;
                    fullClick.classList.add("disable");
                };
                if ( fullHowMuchOfNumber >= 3 && fullHowMuchOfNumber !=2 ) {
                    const brelan = [] ;
                    brelan[index] = fullIsOk ;
                    fullClick.addEventListener("click",() => {
                        points.full = 25;
                        fullClick.innerHTML = points.full;
                    });
                };
            };
        break;
        case "petiteS":
            selectDices.sort(function(a,b) {
                return a-b ;
            })
            let SmallSuiteIsOk = true;
            for (const value of selectDices) {
                if (!selectDices.includes(value)) {
                    SmallSuiteIsOk = false ;
                    break ;
                }
            }
            if (SmallSuiteIsOk) {
                points.petiteS = 30;
                petiteS.innerHTML = points.petiteS;
            }
        break;
        case "grandeS":
            selectDices.sort(function(a,b) {
                return a-b ;
            })
            let LargeSuiteIsOk = true;
            for (const value of selectDices) {
                if (!selectDices.includes(value)) {
                    LargeSuiteIsOk = false ;
                    break ;
                }
            }
            if (LargeSuiteIsOk) {
                points.grandeS = 40;
                grandeS.innerHTML = points.grandeS;
                grandeS.classList.add("disable");
            }
        break;
        case "yams":
            let pointsOfYams = 0;
            // Création d'un tableau pour compter le nombre de fois où l'on va avoir une valeur :
            const counterOfYams = [];
            // Pour chaque dé du tableau : 
            for (const dice of selectDices) {
                // Si l'on a déja trouvé la valeur d'un dé on incrémente de un :
                if (counterOfYams[dice]) {
                    counterOfYams[dice]++ ;
                } else {// sinon c'est la première fois que l'on a vu cette valeur alors on initialise à un :
                    counterOfYams[dice] = 1 ;
                }
            }
            //On compte si l'on a bien 5 fois le même nombre :
            for (const number in counterOfYams) {
                if (counterOfYams[number] === 5) {
                    points.yams = 50;
                    yams.innerHTML = points.yams;
                };
            };
        break;
        case"luck":
        let sumOfLuck = 0;
        for (const dice of selectDices) {
            // sumOfLuck += dice;
            sumOfLuck = sumOfLuck + dice ;
            if(sumOfLuck) {
                points.luck = sumOfLuck;
                luck.innerHTML = points.luck;
            };
        };
        break;
        default:
        console.log("dead");
        break;
    }
}


/* fonction pour boucler dans le tableau operation et faire la comparaison correctement  
avec la fonction qui contient le switch*/
let switchCheck = () => {
    for (let index = 0; index < operation.length; index++) {
        calculatePoints(selectDices,operation[index]);
    };
};


// fonction qui calcul le nombre de points total contenu dans points au fur et a mesure et affiche dans le tableau html
let totalSum = () => {
    let sum = 0;
    for (const key in points) {
        sum += points[key];
        totalEnding.innerHTML = sum;
    };
};



//fonction compteur et condition pour les manches
let counterClick = () => {
    roundCounter++;
    roundCounterHtml.innerHTML = `${roundCounter}/3`
    if(roundCounter === 3) {
        roundCounter = 0;
        btnRestart.disabled = true;
    };
};


/* fonction qui permet au clic de supprimer un nombre de [dices] et le mettre dans [selectDices] et inversement
parseint permet d'extraire le nombre a l'intérieur du dé sur lequel l'user clique qui avec innerhtml était un string et re devient un nombre
et donc de faire marcher la méthode indexOf*/
let getNumberActiveDice = () => {
    diceHtml.forEach((dice) => {
        dice.addEventListener("click", () => {         
            dice.classList.toggle("active");
            let clickArrayNumber = parseInt(dice.innerHTML);
            let indexInDices = dices.indexOf(clickArrayNumber);
            let indexInSelectDices = selectDices.indexOf(clickArrayNumber);
            if(dice.classList.contains("active")) {
                calculatePoints(selectDices,operation);
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

// vérifie les click sur une cellule et restart le compteur quand une cellule est pleine
tableResultText.forEach((tr) => {
    tr.addEventListener("click", () => {
        if(tr.innerHTML) {
            btnRestart.disabled = false;
            roundCounter = 0;
        };
    });
});


// listener

total1.addEventListener("click", () => {
    calculatePoints(selectDices,"total1");
});
total2.addEventListener("click", () => {
    calculatePoints(selectDices,"total2");
});
total3.addEventListener("click", () => {
    calculatePoints(selectDices,"total3");
});
total4.addEventListener("click", () => {
    calculatePoints(selectDices,"total4");
});
total5.addEventListener("click", () => {
    calculatePoints(selectDices,"total5");
});
total6.addEventListener("click", () => {
    calculatePoints(selectDices,"total6");
});
brelanClick.addEventListener("click",() => {
    calculatePoints(selectDices,"brelan");
});
carreClick.addEventListener("click",() => {
    calculatePoints(selectDices,"carre");
});
fullClick.addEventListener("click",() => {
    calculatePoints(selectDices,"full");
});
petiteS.addEventListener("click", () => {
    calculatePoints(selectDices,"petiteS");
});
grandeS.addEventListener("click", () => {
    calculatePoints(selectDices,"grandeS");
});
yams.addEventListener("click", () => {
    calculatePoints(selectDices,"yams");
});
luck.addEventListener("click", () => {
    calculatePoints(selectDices,"luck");
});
btnStart.addEventListener("click", displayRandomDicesNumber);
btnRestart.addEventListener("click", counterClick);
btnRestart.addEventListener("click", restartDices);
btnRestart.addEventListener("click", totalSum);