function createGrid(squaresPerSide = 16) {
    const gridContainer = document.querySelector(".container");
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

    colourGridsOnHover();
};

function generateNewGrid() {
    function getSquaresPerSide() {
        while (true) {
            let squaresPerSide = prompt(`Please enter the number of squares per side of your grid.
    
(number between 3 and 100):`)
            const userClickedCancel = squaresPerSide === null;
            if (userClickedCancel) break;
            if (squaresPerSide === "") continue;
            if (squaresPerSide >= 3 && squaresPerSide <= 100) return squaresPerSide
            alert(`Please enter a number between 3 and 100
        
Click OK to continue.`);
        };
    }

    const squaresPerSide = getSquaresPerSide();
    createGrid(squaresPerSide);
}

function colourGridsOnHover() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>
        square.addEventListener(
            "mouseover", () => {
                const randomColour = getRandomColour();
                square.style.backgroundColor = randomColour;
            }
        )
    );

    function getRandomColour() {
        const numbersAndLetters = "0123456789ABCDEF";
        let colour = "#";
        for (let i = 0; i < 6; i++) {
            colour += numbersAndLetters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }
}

createGrid();
const newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", generateNewGrid)