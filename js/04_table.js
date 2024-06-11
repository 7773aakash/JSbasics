let table = document.body.firstElementChild;

let secondRow = table.rows[1];

// Access the first cell of the second row
let firstCellOfSecondRow = secondRow.cells[0];

// Log the content of the first cell of the second row
console.log(firstCellOfSecondRow.innerHTML); // Outputs:  

firstCellOfSecondRow.innerHTML = 'Nikhil';