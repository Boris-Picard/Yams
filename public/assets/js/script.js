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
const dices = [];

//fonctions
let dicesRandomNumber = () => {
    for (let index = 0; index < 5; index++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        dices.push(dice);
    };
};
console.log(dices);
dicesRandomNumber();

let displayDices = () => {
    let i = 0;
    diceHtml.forEach((de) => {
        de.innerHTML = dices[i];
        i++;
    });
};

//addition des valeurs du tableau sumDice:
let getSumDices  = () => {
    let sumDices = dices[0]+dices[1]+dices[2]+dices[3]+dices[4]
    return sumDices ;
}
//affichage du resultat du calcul des valeurs de sumDice
console.log(getSumDices());

//afficher chaques valeurs individuellement:
for (let i = 0; i < dices.length; i++) {
    const val1 = dices[i];
    console.log(val1);
}

//chercher si un élément est présent dans un tableau:
let valeur1 = 1;
let valeur2 = 2;
let valeur3 = 3;

const selectDices = [1,1,3,3,4]
const operation = "total1"
//Teddy
const calculatePoints=(selectDices,operation)=>{
switch(operation){
// pour le cumul des 1
    case "total1":
        if (selectDices.includes(1)){
            console.log("présence de :" + 1);
            } else {
            console.log("absence de 1");
            }
        break;
// pour le cumul des 2
    case "total2":
        if (selectDices.includes(2)){
            console.log("présence de :" + 2);
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
            console.log("présence de :" + 6);
            } else {
            console.log("absence de 6");
            }
    break;
    case "brelan":
        
    break;
    case "carre":

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

calculatePoints([1,1,3,3,4],"total1")





btnStart.addEventListener("click", displayDices);

