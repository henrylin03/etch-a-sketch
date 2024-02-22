function createGrid() {
    const gridContainer = document.querySelector(".container");
    const gridRow = gridContainer.querySelector(".row");

    let squareCount = 1;
    while (squareCount <= 16) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        gridRow.appendChild(squareDiv);
        squareCount++;
    };

    // initially, the _2nd_ row will be created
    // as there is already one present created in the above loop
    let rowCount = 2;
    while (rowCount <= 16) {
        const rowClone = gridRow.cloneNode(true);
        gridContainer.appendChild(rowClone);
        rowCount++;
    }
};

function generateGrid() {
    alert("New grid button clicked");
}

createGrid();

const squares = document.querySelectorAll(".square");
const newGridButton = document.querySelector("button");

newGridButton.addEventListener("click", generateGrid)
squares.forEach(square =>
    square.addEventListener(
        "mouseover", () => square.classList.add("coloured")
    )
);


// BUILD FUNCTION THAT CREATES A POPUP FOR USER ASKING FOR NUMBER OF SQUARES PER SIDE FOR NEW GRID
// IF USER INPUTS NUMBER MORE THAN 100 SQUARES PER SIDE, SAY MAX 100
// FUNCTION SHOULD THEN GENERATE THE GRID (MAKE THE GRID SQUARES A BIT SMALLER DEPENDING ON HOW BIG IT IS? - I.E. IF THE GRID IS 100X100, THEN HEIGHT/WIDTH IN CSS SHOUDL BE BIT SMALLER - MAYBE FLEXBOX CAN DO THIS?)
// REQUIREMENT IS THAT THE SAME AMOUNT OF PIXELS ARE USED ON THE SCREEN, DESPITE HOW MANY USER PUTS IN
// EVENT LISTENER ON BUTTON TO OPEN FUNCTION