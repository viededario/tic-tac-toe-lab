
let currentPlayer = 'X'; 
let board = ['', '', '', '', '', '', '', '', ''];  
let gameActive = true;    


const messageDisplay = document.getElementById('message');  
const squares = document.querySelectorAll('.sqr');          
const resetButton = document.querySelector('.reset');       


const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]            
];


const handleSquareClick = (event) => {
  const squareIndex = event.target.id;  

  
  if (board[squareIndex] !== '' || !gameActive) return;

  
  board[squareIndex] = currentPlayer;
  event.target.innerText = currentPlayer;

  
  if (checkWinner()) {
    messageDisplay.innerText = `Player ${currentPlayer} wins!`;
    gameActive = false;  
  } else if (!board.includes('')) {  
    messageDisplay.innerText = "It's a draw!";
    gameActive = false;  
  } else {
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageDisplay.innerText = `Player ${currentPlayer}'s turn`;
  }
};


const checkWinner = () => {
  return winningCombos.some(combo => {
    const [a, b, c] = combo;  
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
};


const resetGame = () => {
  board = ['', '', '', '', '', '', '', '', ''];  
  gameActive = true;  
  currentPlayer = 'X';  
  messageDisplay.innerText = `Player ${currentPlayer}'s turn`;  
  squares.forEach(square => (square.innerText = ''));  
};


squares.forEach(square => square.addEventListener('click', handleSquareClick));  
resetButton.addEventListener('click', resetGame);  