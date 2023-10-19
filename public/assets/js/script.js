//Teddy 





//variables





//fonctions






//Thibaud





//variables






//fonctions










//Boris


//variables
let des = document.querySelectorAll(".des");
const btnStart = document.querySelector(".btnStart");


//fonctions
let desRandomNumber = () => {
    des.forEach((de) => {
        de.innerHTML = [Math.floor(Math.random() * 6) + 1];
    })
};


btnStart.addEventListener("click", desRandomNumber);

