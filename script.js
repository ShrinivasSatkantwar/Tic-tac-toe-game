document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const restartBtn = document.getElementById('restartBtn');
  
    let currentPlayer = 'X';
    let winner = null;
  
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!cell.textContent && !winner) {
          cell.textContent = currentPlayer;
          checkWin();
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
    });
  
    restartBtn.addEventListener('click', () => {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      message.textContent = '';
      winner = null;
      currentPlayer = 'X';
    });
  
    function checkWin() {
      const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]             // Diagonal
      ];
  
      winConditions.forEach(condition => {
        const [a, b, c] = condition;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
          message.textContent = `${currentPlayer} wins!`;
          winner = currentPlayer;
        }
      });
  
      if (!winner && Array.from(cells).every(cell => cell.textContent)) {
        message.textContent = "It's a draw!";
      }
    }
  });
  