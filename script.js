function createGrid() {
    const gridContainer = document.querySelector(".container");
    const gridRow = gridContainer.querySelector(".row");

    let squareCount = 1;
    while (squareCount <= 16) {
        const squareDiv = document.createElement("div");
        gridRow.appendChild(squareDiv);
        squareCount++;
    };

    // initially, the _2nd_ row will be created, as there is already one present created in the above loop
    let rowCount = 2;
    while (rowCount <= 16) {
        const rowClone = gridRow.cloneNode(true);
        gridContainer.appendChild(rowClone);
        rowCount++;
    }
};



createGrid();