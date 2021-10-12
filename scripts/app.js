const grid = document.querySelector('.grid')

// Grid Elements
const width = 10
const cellCount = 120

// Cells
const cells = []

// Tetrominoes
// i, l, j, t, s, z, o
// rotation point 3rd number in array
const tetrominoesCSSClass = [['i'],['l'],['j'],['t'],['s'],['z'],['o']]
const tetrominoes = [[3, 4, 5, 6], [14, 4, 5, 6], [4, 5, 6, 16], [4, 5, 6, 15], [14, 15, 5, 6], [4, 5, 15, 16], [4, 5, 14, 15]]
// arrays with indiviual tetro's
const i = [3, 4, 5, 6]
const l = []
const previousPiece = []
const currentPiece = []
const nextPiece = []

const tempArr = []

let currentPieceStartingPosition = 0

// step 1 get get the shapes dropping 
// collison detection is true or false specify differnt class for moving block
// while travelling one color, then change color 
// 


function createGrid() {
  for(let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.id = i
    cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)
  }
}
createGrid()

function createTetroPiece() {
  const randomPiece = Math.floor(Math.random() * tetrominoes.length)
  for(let i = 0; i < 4; i++) {
    currentPiece.push(cells[tetrominoes[randomPiece][i]])
  }
}
createTetroPiece()

function createTetroNextPiece() {
    nextPiece.push(createTetroPiece())
}
console.log(createTetroNextPiece(currentPiece));
createTetroNextPiece(currentPiece)

console.log(`Original Piece -->`,currentPiece)

function movePiece(piece) {
  console.log(`Move Piece Function -->`, piece)
  console.log(piece)
  console.log(cells)
}
movePiece(currentPiece)

function addPiece(piece) {
  cells[currentPieceStartingPosition].classList.add('block')
}


function removePiece(piece) {
  cells[currentPieceStartingPosition].classList.remove('block')
}



function tetrominoesCenter(piece) {
  if(currentPiece === [4, 5, 14, 15]) {
    return piece
  } else {
    return piece[2]
  }
}
tetrominoesCenter(currentPiece)


console.log(`Tetro Center Point -->`, tetrominoesCenter)
function centerPointTetrominoes() {
  tetrominoes.map(item => {
    tetrominoesCenter.push(item[2])
  })
}


function handleKeyPress(e) {


  removePiece(currentPieceStartingPosition)

  if(e.keyCode === 39 && currentPieceStartingPosition % width !== width -1) {
    // Right
    currentPieceStartingPosition++

    // if(e.keyCode === 39 && !cells[currentPieceStartingPosition + 1].classList.contains('block')) {
    //   currentPieceStartingPosition++
    // }

  } else if(e.keyCode === 37 && currentPieceStartingPosition % width !== 0) {
    // Left
    currentPieceStartingPosition--

    // if(e.keyCode === 37 && !cells[currentPieceStartingPosition - 1].classList.contains('block')) {
    //   currentPieceStartingPosition--
    // }

  } else if(e.keyCode === 38 && currentPieceStartingPosition >= width) {
    // Up
    // Rotate Function
    currentPieceStartingPosition -= width
    // if(e.keyCode === 38 && !cells[currentPieceStartingPosition - 10].classList.contains('block')) {
    //   currentPieceStartingPosition -= width
    // }



  } else if(e.keyCode === 40 && currentPieceStartingPosition + width <= width * 12) {
    // Down
    currentPieceStartingPosition += width
    // if(e.keyCode === 40 && !cells[currentPieceStartingPosition + 10].classList.contains('block')) {
      
    // }
  
  }

  addPiece(currentPieceStartingPosition)

}

document.addEventListener('keydown', handleKeyPress)




 // removePiece(currentPiece)

  // if(e.keyCode === 39 && Number(currentPiece[0].innerText) % width !== width -1 && Number(currentPiece[1].innerText) % width !== width -1 && Number(currentPiece[2].innerText) % width !== width -1 && Number(currentPiece[3].innerText) % width !== width -1) {
  //   // Right
  //   if(e.keyCode === 39 && !cells[Number(currentPiece[0].innerText) + 1].classList.contains('block') && !cells[Number(currentPiece[1].innerText) + 1].classList.contains('block') && !cells[Number(currentPiece[2].innerText) + 1].classList.contains('block') && !cells[Number(currentPiece[3].innerText) + 1].classList.contains('block')) {
  //     currentPiece[0]++
  //     currentPiece[1]++
  //     currentPiece[2]++
  //     currentPiece[3]++
  //   }
  // } else if(e.keyCode === 37 && Number(currentPiece[0].innerText) % width !== 0 && Number(currentPiece[1].innerText) % width !== 0 && Number(currentPiece[2].innerText) % width !== 0 && Number(currentPiece[3].innerText) % width !== 0) {
  //   // Left
  //   if(e.keyCode === 37 && !cells[currentPiece[0] - 1].classList.contains('block') && !cells[currentPiece[1] - 1].classList.contains('block') && !cells[currentPiece[2] - 1].classList.contains('block') && !cells[currentPiece[3] - 1].classList.contains('block')) {
  //     currentPiece[0]--
  //     currentPiece[1]--
  //     currentPiece[2]--
  //     currentPiece[3]--
  //   }
  // } else if(e.keyCode === 38 && currentPiece + width <= width * 12 - 1) {
  //   // Up
  //   // Rotate Function
  //   if(e.keyCode === 38 && !cells[currentPiece - 10].classList.contains('block')) {
  //     currentPiece -= width
  //   }

  //   console.log('Rotate 90 deg function')


  // } else if(e.keyCode === 40 && currentPiece + width <= width * 12 - 1) {
  //   // Down
  //   if(e.keyCode === 40 && !cells[currentPiece + 10].classList.contains('block')) {
  //     currentPiece += width
  //   }
  
  // }

  // addPiece(currentPiece)