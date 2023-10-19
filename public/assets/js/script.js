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


btnStart.addEventListener("click", displayDices);

