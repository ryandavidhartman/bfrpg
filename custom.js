function rolld4() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber;
  }

function rolld6() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }

function generalDice(n,d,m){
    var result = 0 
    for (let i = 0; i < n; i++ ) {
      result += (Math.floor(Math.random() * d) + 1)
    }
    return (result + m)
}

function rollAbilityScore() {
  // Roll 4 six-sided dice
  let rolls = [];
  for (let i = 0; i < 3; i++) {
      rolls.push(generalDice(1, 6, 0));
  }
  
  // // Reroll any 1's until we get a value higher than 1
  // for (let i = 0; i < rolls.length; i++) {
  //     while (rolls[i] === 1) {
  //         rolls[i] = generalDice(1, 6, 0);
  //     }
  // }
  
  // Sort the rolls in descending order
  //rolls.sort((a, b) => b - a);
  
  // Sum the highest 3 values
  let sum = 0;
  for (let i = 0; i < 3; i++) {
      sum += rolls[i];
  }
  
  return sum;
}




let tuTable = {
    1: {
      "min": 13,
      "skeleton / 1 HD":[13,14,15,16],
      "zombie / 2 HD" : [17,18],
      "Ghoul / 3 HD" : [19,20]

    }
  }

function turnUndead (level, roll) {
  switch (level){
    case 1:
      if (roll >=13 && roll < 17) {
        return "1 HD / Skeleton"
      } else if (roll >=17 && roll < 19) {
        return "2 HD / Zombie"
      } else if (roll >=17 && roll < 21) {
        return "3 HD / Ghoul"
      } else { return "Nothing"}
    case 2:
      if (roll >=11 && roll < 15) {
        return "1 HD / Skeleton"
      } else if (roll >=15 && roll < 18) {
        return "2 HD / Zombie"
      } else if (roll >=18 && roll < 20) {
        return "3 HD / Ghoul"
      } else if (roll >= 20 ) {
        return "4 HD / Wight"
      } else { return "Nothing"}
    case 3: 
      if (roll >=9 && roll < 13) {
        return "1 HD / Skeleton"
      } else if (roll >=13 && roll < 17) {
        return "2 HD / Zombie"
      } else if (roll >=17 && roll < 19) {
        return "3 HD / Ghoul"
      } else if (roll >= 19 ) {
        return "4 HD / Wight"
      } else { return "Nothing"}
    case 4:
      if (roll >=7 && roll < 11) {
        return "1 HD / Skeleton"
      } else if (roll >=11 && roll < 15) {
        return "2 HD / Zombie"
      } else if (roll >=15 && roll < 18) {
        return "3 HD / Ghoul"
      } else if (roll >= 18 && roll < 20) {
        return "4 HD / Wight"
      } else if (roll >= 20 && roll < 21) {
        return "5 HD / Wraith"
      } else { return "Nothing"}
    case 5:
      if (roll >=5 && roll < 9) {
        return "1 HD / Skeleton"
      } else if (roll >=9 && roll < 13) {
        return "2 HD / Zombie"
      } else if (roll >=13 && roll < 17) {
        return "3 HD / Ghoul"
      } else if (roll >= 17 && roll < 19) {
        return "4 HD / Wight"
      } else if (roll >= 19 && roll < 21) {
        return "5 HD / Wraith"
      } else { return "Nothing"}
    case 6:
      if (roll >=3 && roll < 7) {
        return "1 HD / Skeleton"
      } else if (roll >=7 && roll < 11) {
        return "2 HD / Zombie"
      } else if (roll >=11 && roll < 15) {
        return "3 HD / Ghoul"
      } else if (roll >= 15 && roll < 18) {
        return "4 HD / Wight"
      } else if (roll >= 18 && roll < 20) {
        return "5 HD / Wraith"
      } else if (roll >= 20 && roll < 21) {
        return "6 HD / Mummy"
      } else { return "Nothing"}
    case 7:
      if (roll >=2 && roll < 5) {
        return "1 HD / Skeleton"
      } else if (roll >=5 && roll < 9) {
        return "2 HD / Zombie"
      } else if (roll >=9 && roll < 13) {
        return "3 HD / Ghoul"
      } else if (roll >= 13 && roll < 17) {
        return "4 HD / Wight"
      } else if (roll >= 17 && roll < 19) {
        return "5 HD / Wraith"
      } else if (roll >= 19 && roll < 21) {
        return "6 HD / Mummy"
      } else { return "Nothing"}
    case 8:
      if (roll >=3 && roll < 7) {
        return "Skeleton T + 2 HD / Zombie"
      } else if (roll >=7 && roll < 11) {
        return "Skeleton T + 3 HD / Ghoul"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton T + 4 HD / Wight"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton T + 5 HD / Wraith"
      } else if (roll >= 18 && roll < 20) {
        return "Skeleton T + 6 HD / Mummy"
      } else if (roll >= 20 && roll < 21) {
        return "Skeleton T + 7 HD / Spectre"
      } else { return "Skeleton T, Automatically"}
    case 9:
      if (roll >=2 && roll < 5) {
        return "Skeleton T + 2 HD / Zombie"
      } else if (roll >=5 && roll < 9) {
        return "Skeleton T + 3 HD / Ghoul"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton T + 4 HD / Wight"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton T + 5 HD / Wraith"
      } else if (roll >= 17 && roll < 19) {
        return "Skeleton T + 6 HD / Mummy"
      } else if (roll >= 19 && roll < 21) {
        return "Skeleton T + 7 HD / Spectre"
      } else { return "Skeleton T, Automatically"}
    case 10:
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie T + 3 HD / Ghoul"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie T + 4 HD / Wight"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton,Zombie T + 5 HD / Wraith"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton,Zombie T + 6 HD / Mummy"
      } else if (roll >= 18 && roll < 20) {
        return "Skeleton,Zombie T + 7 HD / Spectre"
      } else if (roll >= 20 && roll < 21) {
        return "Skeleton,Zombie T + 8 HD / VAmpire"
      } else { return "Skeleton,Zombie T, Automatically"}
    case 11:
      if (roll >=2 && roll < 5) {
        return "Skeleton D + Zombie T + 3 HD / Ghoul"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton D + Zombie T + 4 HD / Wight"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton D + Zombie T + 5 HD / Wraith"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton D + Zombie T + 6 HD / Mummy"
      } else if (roll >= 17 && roll < 19) {
        return "Skeleton D + Zombie T + 7 HD / Spectre"
      } else if (roll >= 19 && roll < 21) {
        return "Skeleton D + Zombie T + 8 HD / Vampire"
      } else { return "Skeleton D + Zombie T, Automatically"}
    case 12:
      if (roll >=3 && roll < 7) {
        return "Skeleton D + Zombie, Ghoul T + 4 HD / Wight"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton D + Zombie, Ghoul T + 5 HD / Wraith"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton D + Zombie, Ghoul T + 6 HD / Mummy"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton D + Zombie, Ghoul T + 7 HD / Spectre"
      } else if (roll >= 18 && roll < 20) {
        return "Skeleton D + Zombie, Ghoul T + 8 HD / Vampire"
      } else if (roll >= 20 && roll < 21) {
        return "Skeleton D + Zombie, Ghoul T + 9 HD / Ghost"
      } else { return "Skeleton D + Zombie, Ghoul T, Automatically"}
    case 13:
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie D + Ghoul T + 4 HD / Wight"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie D + Ghoul T + 5 HD / Wraith"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton,Zombie D + Ghoul T + 6 HD / Mummy"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton,Zombie D + Ghoul T + 7 HD / Spectre"
      } else if (roll >= 17 && roll < 19) {
        return "Skeleton,Zombie D + Ghoul T + 8 HD / Vampire"
      } else if (roll >= 19 && roll < 21) {
        return "Skeleton,Zombie D + Ghoul T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie D + Ghoul T, Automatically"}
    case 14: 
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 5 HD / Wraith"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 6 HD / Mummy"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 7 HD / Spectre"
      } else if (roll >= 15 && roll < 18) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 8 HD / Vampire"
      } else if (roll >= 18 && roll < 21) {
        return "Skeleton,Zombie D + Ghoul, Wight T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie D + Ghoul, Wight T, Automatically"}
    case 15:
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 5 HD / Wraith"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 6 HD / Mummy"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 7 HD / Spectre"
      } else if (roll >= 13 && roll < 17) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 8 HD / Vampire"
      } else if (roll >= 17 && roll < 21) {
        return "Skeleton,Zombie,Ghoul D + Wight T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul D + Wight T, Automatically"}
    case 16: 
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 6 HD / Mummy"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 7 HD / Spectre"
      } else if (roll >= 11 && roll < 15) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 8 HD / Vampire"
      } else if (roll >= 15 && roll < 21) {
        return "Skeleton,Zombie,Ghoul D + Wight,Wraith T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul D + Wight,Wraith T, Automatically"}
    case 17:
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 6 HD / Mummy"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 7 HD / Spectre"
      } else if (roll >= 9 && roll < 13) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 8 HD / Vampire"
      } else if (roll >= 13 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight D + Wraith T, Automatically"}
    case 18:
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T + 7 HD / Spectre"
      } else if (roll >= 7 && roll < 11) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T + 8 HD / Vampire"
      } else if (roll >= 11 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight D + Wraith,Mummy T, Automatically"}
    case 19: 
      if (roll >=2 && roll < 5) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T + 7 HD / Spectre"
      } else if (roll >= 5 && roll < 9) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T + 8 HD / Vampire"
      } else if (roll >= 9 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy T, Automatically"}
    case 20:
      if (roll >=3 && roll < 7) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy,Spectre T + 8 HD / Vampire"
      } else if (roll >= 7 && roll < 21) {
        return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy,Spectre T + 9 HD / Ghost"
      } else { return "Skeleton,Zombie,Ghoul,Wight,Wraith D + Mummy,Spectre T, Automatically"} 
    default:
      return "Nothing"
  }
}


function treasureGeMTable() {
  const roll = generalDice(1,100,0)
  if (roll >= 1 && roll <=20 ){
    return 1
  } else if (roll >= 21 && roll <= 45 ){
    return 2
  } else if (roll >= 46 && roll <= 75 ){
    return 3
  } else if (roll >= 76 && roll <= 95 ){
    return 4 
  } else {return 5}
}

export function treasureGeMTable2() {
  const roll = generalDice(2,6,0)
  if (roll === 2 ){
    return 1
  } else if (roll === 3 ){
    return 2
  } else if (roll === 4 ){
    return 3
  } else if (roll >= 5 && roll <= 9 ){
    return 4 
  } else if (roll === 10 ){
    return 5 
  } else if (roll === 11 ){
    return 6 
  }  else if (roll === 12 ){
    return 7
  } 
}

export function confusionTable() {
  const roll = generalDice(1,20,0)
  if (roll >= 1 && roll <= 2){
    return 1
  }
  else if (roll >=3 && roll <=4 ){
    return 2
  } else if (roll >= 5 && roll <= 10 ){
    return 3 
  } else if (roll >= 11 && roll <= 14 ){
    return 4 }
    else if (roll >= 15 && roll <= 20 ){
      return 5 }
}

export function generalTableSelect(dice, values) {
  const roll = generalDice(dice[0], dice[1], dice[2])
  var counter = 0
  for (let i =0; i < values.length; i++) {
    if (roll >= values[i][0] && roll <= values[i][1]) { return i + 1}
  }
}

export function generalTableSelect2(dice, values) {
  const roll = generalDice(dice[0], dice[1], dice[2])
  var counter = 0
  for (let i =0; i < values.length; i++) {
    if (roll >= values[i][0] && roll <= values[i][1]) { return [i + 1,roll]}
  }
}

export function treasureGeMTable3() {
  const roll = generalDice(1,100,0)
  if (roll >= 1 && roll <=10 ){
    return 1
  } else if (roll >= 11 && roll <= 20 ){
    return 2
  } else if (roll >= 21 && roll <= 28 ){
    return 3
  } else if (roll >= 29 && roll <= 38 ){
    return 4 
  } else if (roll >= 39 && roll <= 45 ){
    return 5
  } else if (roll >= 46 && roll <= 54 ){
    return 6
  } else if (roll >= 55 && roll <= 60 ){
    return 7 
  } else if (roll >= 61 && roll <= 65 ){
    return 8
  } else if (roll >= 66 && roll <= 70 ){
    return 9
  } else if (roll >= 71 && roll <= 75 ){
    return 10 
  } else if (roll >= 76 && roll <= 79 ){
    return 11
  } else if (roll >= 80 && roll <= 89 ){
    return 12
  } else if (roll >= 90 && roll <= 94 ){
    return 13
  } else if (roll >= 95 && roll <= 97 ){
    return 14
  } else if (roll >= 98 && roll <= 100 ){
    return 15
  } 
}

export function treasureGeMTable4() {
  const roll = generalDice(1,100,0)
  if (roll >= 1 && roll <=6 ){
    return [1,1]
  } else if (roll >= 7 && roll <= 12 ){
    return [2,1]
  } else if (roll >= 13 && roll <= 14 ){
    return [3,1]
  } else if (roll >= 15 && roll <= 21 ){
    return [4,1]
  } else if (roll >= 22 && roll <= 27 ){
    return [5,1]
  } else if (roll >= 28 && roll <= 32 ){
    return [6,1]
  } else if (roll >= 32 && roll <= 37 ){
    return [7,1]
  } else if (roll >= 38 && roll <= 40 ){
    return [8,1]
  } else if (roll >= 41 && roll <= 42 ){
    return [9,1]
  } else if (roll >= 42 && roll <= 47 ){
    return [10,1]
  } else if (roll >= 48 && roll <= 51 ){
    return [11,1]
  } else if (roll === 52 ){
    return [12,1]
  } else if (roll >= 53 && roll <= 55 ){
    return [13,1]
  } else if (roll >= 56 && roll <= 62 ){
    return [1,3]
  } else if (roll >= 63 && roll <= 65 ){
    return [2,3]
  } else if (roll >= 66 && roll <= 68 ){
    return [3,3]
  } else if (roll >= 69 && roll <= 73 ){
    return [4,3]
  } else if (roll >= 74 && roll <= 77 ){
    return [5,3]
  } else if (roll >= 78 && roll <= 80 ){
    return [6,3]
  } else if (roll >= 81 && roll <= 82 ){
    return [7,3]
  } else if (roll >= 83 && roll <= 89 ){
    return [8,3]
  } else if (roll === 90 ){
    return [9,3]
  } else if (roll >= 91 && roll <= 95 ){
    return [10,3]
  } else if (roll === 96  ){
    return [11,3]
  } else if (roll >= 97 && roll <= 99){
    return [12,3]
  } else if (roll === 100 ){
    return [13,3]
  } 
}

function highlightTableRow(table, num) {

  // Get a reference to the table element
  var table = document.querySelector(table + " " + "table");
  // clear table of any highlights
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].classList.remove('myHighlighted');
  }
  // Get a reference to the specific row that matches the random number
  var row = table.rows[num];
  // Add a class to highlight the row

  row.classList.add("myHighlighted");
}

export function highlightTableRowRet(table, num) {

  // Get a reference to the table element
  var table = document.querySelector(table + " " + "table");
  // clear table of any highlights
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].classList.remove('myHighlighted');
  }
  // Get a reference to the specific row that matches the random number
  var row = table.rows[num[0]];
  // Add a class to highlight the row
  row.classList.add("myHighlighted");
  return num[1]
}

export function highlightTableCell(table, r, c) {

  // Get a reference to the table element
  var table = document.querySelector(table + " " + "table");

  var highlightedCells = table.querySelectorAll(".myHighlightedCell");
  for (var i = 0; i < highlightedCells.length; i++) {
    highlightedCells[i].classList.remove("myHighlightedCell");
  }
  
  // Get a reference to the specific cell that matches the  number
  var rows = table.getElementsByTagName("tr");
  var cells = rows[r].getElementsByTagName("td")
  //console.log(cells)
  // rows[num].classList.add("myHighlighted");
  cells[c].classList.add("myHighlightedCell")
  //console.log(cells[c])
}

// Returns the chosen value plus zero-based matrix coordinates
export function generalMatrixSelect(rowDice, colDice, matrix) {
  const rowRoll = generalDice(rowDice[0], rowDice[1], rowDice[2]); // e.g., d3
  const colRoll = generalDice(colDice[0], colDice[1], colDice[2]); // e.g., d3

  const rowIndex = Math.min(Math.max(rowRoll - 1, 0), matrix.length - 1);
  const colIndex = Math.min(Math.max(colRoll - 1, 0), matrix[0].length - 1);

  return {
    value: matrix[rowIndex][colIndex],
    rowIndex,
    colIndex
  };
}

// Highlights a specific matrix cell in a Markdown-rendered table.
// Matches the green color of normal table highlights (myHighlighted)
export function highlightMatrixCell(tableSelector, rowIndex, colIndex) {
  const table = document.querySelector(tableSelector);
  if (!table) return;

  // Inject CSS once
  const STYLE_ID = "matrix-highlight-style";
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .matrix-cell-highlight {
        background-color: #97B29B !important; /* same green as .myHighlighted */
        outline: 2px solid #2e8b57;
        transition: background-color 150ms ease-in;
      }
    `;
    document.head.appendChild(style);
  }

  // Remove previous matrix highlights
  table.querySelectorAll(".matrix-cell-highlight").forEach(el =>
    el.classList.remove("matrix-cell-highlight")
  );

  // Map matrix coords → DOM coords (skip header and row labels)
  const domRow = rowIndex + 1;
  const domCol = colIndex + 1;

  const rows = table.querySelectorAll("tr");
  const targetRow = rows[domRow];
  if (!targetRow) return;

  const cells = targetRow.querySelectorAll("th, td");
  const targetCell = cells[domCol];
  if (!targetCell) return;

  targetCell.classList.add("matrix-cell-highlight");
}


// Extracts the matrix of values from a Markdown-rendered table.
// Assumes first row = header and first column = row labels.
export function readMatrixFromTable(tableSelector) {
  const table = document.querySelector(tableSelector);
  if (!table) return [];

  const rows = Array.from(table.querySelectorAll("tr"));
  if (rows.length < 2) return [];

  const matrix = [];
  for (let r = 1; r < rows.length; r++) {
    const cells = Array.from(rows[r].querySelectorAll("th, td"));
    // ignore the first column (row labels)
    const rowValues = cells.slice(1).map(c => c.textContent.trim());
    matrix.push(rowValues);
  }
  return matrix;
}

// Select independently from multiple columns in a matrix table and highlight the picks.
// Requires your existing readMatrixFromTable(tableSelector) and generalDice(n,d,m).
// Params:
// - tableSelector: CSS selector for the table wrapper (e.g., "#party-name-matrix").
// - columns: array of *matrix* column indexes to select from, e.g. [0,1,2].
// - diceSpecs (optional): per-column dice tuples [[n,d,m], ...]. If omitted,
//   defaults to uniform roll across the number of rows (1..matrix.length).
// - options.color (optional): highlight color (default matches your green).
// Returns: { rows: number[], values: string[] }
export function rollIndependentColumns(tableSelector, columns, diceSpecs = null, options = {}) {
  const color = options.color ?? "#97B29B";

  const matrix = readMatrixFromTable(tableSelector); // strips header row + first label col
  if (!matrix || !matrix.length) return { rows: [], values: [] };

  const maxRow = matrix.length - 1;
  const clamp = (n) => Math.min(Math.max(n, 0), maxRow);

  // Compute selected row per column
  const rows = columns.map((_, i) => {
    const spec = diceSpecs?.[i];
    if (spec && spec.length === 3) {
      const [n, d, m] = spec;
      return clamp(generalDice(n, d, m) - 1);
    }
    // Default: roll uniformly over visible rows
    return clamp(generalDice(1, matrix.length, 0) - 1);
  });

  // Collect values in the requested columns
  const values = rows.map((ri, i) => matrix[ri][columns[i]]);

  // ---- Highlighting ----
  const STYLE_ID = "matrix-highlight-style";
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .matrix-cell-highlight {
        background-color: ${color} !important;
        outline: 2px solid #2e8b57;
        transition: background-color 150ms ease-in;
      }
    `;
    document.head.appendChild(style);
  }

  const host = document.querySelector(tableSelector);
  const table = host?.querySelector("table");
  if (table) {
    // clear old highlights
    table.querySelectorAll(".matrix-cell-highlight")
         .forEach(el => el.classList.remove("matrix-cell-highlight"));

    const domRows = table.querySelectorAll("tr");
    const addHL = (rowIndex, colIndex) => {
      const domRow = rowIndex + 1; // skip header row
      const domCol = colIndex + 1; // skip first label column
      const row = domRows[domRow];
      if (!row) return;
      const cells = row.querySelectorAll("th, td");
      const cell = cells[domCol];
      if (cell) cell.classList.add("matrix-cell-highlight");
    };

    rows.forEach((ri, i) => addHL(ri, columns[i]));
  }
  // ----------------------

  return { rows, values };
}




export function calculateModifier (stat) {
  switch (stat) {
    case 3:
      return "-3"
    case 4: 
    case 5: 
      return "-2"
    case 6: 
    case 7:
    case 8: 
      return "-1"
    case 9:
    case 10:
    case 11: 
    case 12:
      return "0"
    case 13:
    case 14:
    case 15: 
      return "+1"
    case 16: 
    case 17: 
      return "+2"
    case 18: 
      return "+3"
    default:
      return "+3"
  }

}


export function convertToGold(value, coin) {
  switch(coin){
    case "gp":
      return value
    case "pp":
      return value*5
    case "sp": 
      return value*0.1
    case "cp":
      return value*0.1*0.2
  }
}




export {
    rolld4, rolld6,
    generalDice, turnUndead, treasureGeMTable, highlightTableRow, rollAbilityScore
}

