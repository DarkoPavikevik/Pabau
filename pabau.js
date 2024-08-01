const directions = {
    right: { row: 0, col: 1 },
    left: { row: 0, col: -1 },
    up: { row: -1, col: 0 },
    down: { row: 1, col: 0 }
};

function findPathAndLetters(grid) {
    let startRow = 0, startCol = 0;

    // Locating the starting position
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '>') {
                startRow = row;
                startCol = col;
                break;
            }
        }
    }

    let currentRow = startRow;
    let currentCol = startCol;
    let path = '';
    let letters = '';
    let direction = 'right';

    while (true) {
        const currentChar = grid[currentRow][currentCol];
        path += currentChar;

        if (/[A-Z]/.test(currentChar)) {
            letters += currentChar;
        }

        if (currentChar === 's') {
            break;
        }

        if (currentChar === '+') {
            let newDirection = null;

            
            if (direction !== 'down' && currentRow > 0 && grid[currentRow - 1][currentCol] !== ' ' && grid[currentRow - 1][currentCol] !== undefined) {
                newDirection = 'up';
            }
            if (direction !== 'up' && currentRow < grid.length - 1 && grid[currentRow + 1][currentCol] !== ' ' && grid[currentRow + 1][currentCol] !== undefined) {
                newDirection = 'down';
            }
            if (direction !== 'right' && currentCol > 0 && grid[currentRow][currentCol - 1] !== ' ' && grid[currentRow][currentCol - 1] !== undefined) {
                newDirection = 'left';
            }
            if (direction !== 'left' && currentCol < grid[0].length - 1 && grid[currentRow][currentCol + 1] !== ' ' && grid[currentRow][currentCol + 1] !== undefined) {
                newDirection = 'right';
            }

            if (newDirection) {
                direction = newDirection;
            }
        }

        const move = directions[direction];
        currentRow += move.row;
        currentCol += move.col;
    }

    return { path, letters };
}

/* const grid = [
    ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['s', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
  ];*/

const grid = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
    ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    ['s', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
  ];

const result = findPathAndLetters(grid);
console.log("Path:", result.path);
console.log("Letters:", result.letters);
