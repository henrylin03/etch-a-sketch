function createGrid(squaresPerSide = 16) {
    const gridContainer = document.querySelector(".container");
    // deletes existing grid container and its grids
    gridContainer.replaceChildren();

    const row = document.createElement("div");
    row.classList.add("row");
    gridContainer.appendChild(row);

    let squareCount = 1;
    while (squareCount <= squaresPerSide) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        row.appendChild(squareDiv);
        squareCount++;
    };

    let rowCount = 1;
    // there is an existing row
    while (rowCount <= squaresPerSide - 1) {
        const rowClone = row.cloneNode(true);
        gridContainer.appendChild(rowClone);
        rowCount++;
    }
};

function generateNewGrid() {
    function getSquaresPerSide() {
        while (true) {
            let squaresPerSide = prompt(`Please enter the number of squares per side of your grid
    
(integer between 3 and 100 inclusive):`)
            const userClickedCancel = squaresPerSide === null;
            if (userClickedCancel) break;
            if (squaresPerSide === "") continue;
            if (Number.isInteger(+squaresPerSide)
                && squaresPerSide >= 3
                && squaresPerSide <= 100) return squaresPerSide
            alert(`Please enter an integer between 3 and 100 inclusive
        
Click OK to continue`);
        };
    }

    const squaresPerSide = getSquaresPerSide();
    createGrid(squaresPerSide);
    colourGridsOnHover();
    clearSquaresOnCheckboxChange();
}

function colourGridsOnHover() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>
        square.addEventListener(
            "mouseover", () => {
                squareColour = randomiseColoursCheckbox.checked ?
                    getRandomColour() : "#fb8500"
                square.style.backgroundColor = squareColour;
            }
        )
    );

    function getRandomColour() {
        const numbersAndLetters = "0123456789ABCDEF";
        let colour = "#";
        for (let i = 0; i < 6; i++) {
            colour += numbersAndLetters[
                Math.floor(Math.random() * numbersAndLetters.length)
            ];
        }
        return colour;
    }
}

function clearSquaresOnCheckboxChange() {
    const squares = document.querySelectorAll(".square");
    randomiseColoursCheckbox.addEventListener(
        "change",
        () => { squares.forEach(square => square.style.backgroundColor = "") });
}

const randomiseColoursCheckbox = document.querySelector("#randomise-colours");
createGrid();
colourGridsOnHover();
clearSquaresOnCheckboxChange();

const newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", generateNewGrid);

//TODO: HANDLE USER INPUT THAT ARE DECIMALS - GIVE THEM AN ERROR