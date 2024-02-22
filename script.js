function createGrid(squaresPerSide = 16) {
    const gridContainer = document.querySelector(".container");
    const gridRow = gridContainer.querySelector(".row");

    let squareCount = 1;
    while (squareCount <= squaresPerSide) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        gridRow.appendChild(squareDiv);
        squareCount++;
    };

    // initially, the _2nd_ row will be created
    // as there is already one present created in the above loop
    let rowCount = 2;
    while (rowCount <= squaresPerSide) {
        const rowClone = gridRow.cloneNode(true);
        gridContainer.appendChild(rowClone);
        rowCount++;
    }
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

}

// todo: initialise page with at least a grid
createGrid();

const newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", generateNewGrid)

const squares = document.querySelectorAll(".square");
squares.forEach(square =>
    square.addEventListener(
        "mouseover", () => square.classList.add("coloured")
    )
);


// FUNCTION SHOULD THEN GENERATE THE GRID (MAKE THE GRID SQUARES A BIT SMALLER DEPENDING ON HOW BIG IT IS? - I.E. IF THE GRID IS 100X100, THEN HEIGHT/WIDTH IN CSS SHOUDL BE BIT SMALLER - MAYBE FLEXBOX CAN DO THIS?)
// REQUIREMENT IS THAT THE SAME AMOUNT OF PIXELS ARE USED ON THE SCREEN, DESPITE HOW MANY USER PUTS IN
// EVENT LISTENER ON BUTTON TO OPEN FUNCTION