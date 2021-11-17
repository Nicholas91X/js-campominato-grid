// seleziono il button del play game
const play = document.getElementById("play");

// seleziono il container
const container = document.getElementById("container");

// seleziono gli squares

// Cliccando il play leggo la difficoltà
play.addEventListener("click", function () {
    // Leggo la difficoltà del livello
    let livello = document.getElementById("livello").value;
    let items = "";
    console.log(livello);

    // Ciclo per la creazione degli squares
    if (livello == "Easy") {
        // console.log("check");
        for(let i = 1; i <= 100; i++) {
            items += `<div class="square"></div>`;
        }
        container.innerHTML = items;
        const square = document.querySelectorAll(".square");
        console.log(square);
        square.forEach((square) => {
            square.addEventListener("click", () => {
                square.classList.add("active");
            })
        })
    } else if (livello == "Hard") {
        for(let i = 1; i <= 81; i++) {
            items += `<div class="square-hard"></div>`;
        }
        container.innerHTML = items;
        const squareHard = document.querySelectorAll(".square-hard");
        console.log(squareHard);
        squareHard.forEach((squareHard) => {
            squareHard.addEventListener("click", () => {
                squareHard.classList.add("active");
            })
        })
    } else {
        for(let i = 1; i <= 49; i++) {
            items += `<div class="square-crazy"></div>`;
        }
        container.innerHTML = items;
        const squareCrazy = document.querySelectorAll(".square-crazy");
        console.log(squareCrazy);
        squareCrazy.forEach((squareCrazy) => {
            squareCrazy.addEventListener("click", () => {
                squareCrazy.classList.add("active");
            })
        })
    }
})