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


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//afficher chaques valeurs individuellement:
for (let i = 0; i < dices.length; i++) {
    const val1 = dices[i];
    console.log(val1);
}

//chercher si un élément est présent dans un tableau:

// let elem1 = 1;
// for (let i=0; i<sumDice.length;i++){
//     if(elem1 === dices[i]){
//         console.log('élément contenu');
//     }
// }

let value = 1;
let isFound = getSumDices(value);
console.log(isFound,"l");



//Teddy

// switch(dices[i]){
//     case 1:
//         if(dices[i]==dices[i])
//         console.log(dices[i]);
//         break;
//     case 2:

//         break;
//     case 3:

//         break;
//     case 4:

//     break;
//     case 5:

//     break;
//     case 6:

//     break;

// }







btnStart.addEventListener("click", displayDices);

