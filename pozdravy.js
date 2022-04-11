const tlacitka = document.querySelectorAll('.tlacitko-pozdravu');
console.log(tlacitka);

// (jmeno) => {
// console.log("Ahoj" + jmeno);
// } / zacneme takto / anonymni funkce

// pote ji pridame event listener

// tlacitko.addEventListener("click", (jmeno) => {
//     console.log("Ahoj" + jmeno);
//     }) / pak to vlozim do for each, ktery mi definuje tlacitko


tlacitka.forEach((tlacitko) => {
    tlacitko.addEventListener("click", (udalost) => {
        // console.log(udalost);
        console.log("Ahoj " + udalost.target.innerHTML);
        })
});