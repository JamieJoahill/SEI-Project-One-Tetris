const grid = document.querySelector('.grid')

// Grid Elements
const width = 10
const height = 16

const cellCount = width * height

// Cells
const cells = []


// Finding the position of the shape inside the cells

// Starting Position
let currentPieceStartingPosition = 0

// Tetrominoes
const i = [3, 4, 5, 6]
const l = [14, 4, 5, 6]
const j = [4, 5, 6, 16]
const t = [4, 5, 6, 15]
const s = [14, 15, 5, 6]
const z = [4, 5, 15, 16]
const o = [4, 5, 14, 15]
const test = [5]
// hard code a let variable piece of one block

// an array of constational changes values of the co ords

// Tetrominoes Array
const tetrominoes = [i , l, j, t, s, z, o, test]

const currentPiece = test

const tempArr = []
const currentPosition = []
let updatePosition = []


// step 1 get get the shapes dropping 
// collison detection is true or false specify differnt class for moving block
// while travelling one color, then change to another color when stopped 

function createGrid() {
  for(let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      cell.classList.add('cell')
      grid.appendChild(cell)
      cells.push(cell)
  }
}
createGrid()

// Takes an element from tetrominoes array and places that piece on the grid
function createTetroPiece(piece) {
  return piece.forEach(item => cells[item].classList.add('block','i'))
}

function removeTetroPiece(piece) {
  return piece.forEach(item => cells[item].classList.remove('block','i'))
}

// Something to update the position of the piece
function updatePositionFunc(currentPiece) {
  return currentPiece.map(item => updatePosition.push(item += width))
}

createTetroPiece(currentPiece)
// Your position of your shape takes those co orders and creates the shape

// pass through the co ordinates of the position - iterate through your arrays of co ords and update the values
function moveDown(currentPiece) {

  setInterval(() => {
    // console.log(currentPiece)
    removeTetroPiece(currentPiece)

    // loop looking for postions of new shape location
      // createTetroPiece(piece.forEach(item => cells[item + 10].classList.add('block','i')))
      // setInterval(() => {
        
      //   updatePositionFunc(currentPiece)
      // }, 500);
      setInterval(() => {
        updatePositionFunc(currentPiece)
      }, 200);
           

      // Something that will update the cordinates of the shape
      // loop throught the co ords and update value
      // update the position running a loop 


    createTetroPiece(updatePosition)
    
  }, 1000);

}

moveDown(currentPiece)

// Used for moving pieces around the grid - used with removePiece
function addPiece(piece) {
  // cells[currentPiece].classList.add('block')
}

// Used for moving pieces around the grid - used with addPiece
function removePiece(piece) {
  // cells[currentPieceStartingPosition].classList.remove('block')
}


function createTetroNextPiece(piece) {
  nextPiece.push(piece)
}
// createTetroNextPiece(tetrominoes[5])



function movePiece(piece) {
  // console.log(`Move Piece Function -->`, piece)
  // console.log(piece)
  // console.log(cells)
}
movePiece(currentPiece)


// Find the center point of each Tetromineo, If Cube - then no center point
function tetrominoesCenter(piece) {
  if(currentPiece === [4, 5, 14, 15]) {
    return piece
  } else {
    return piece[2]
  }
}
tetrominoesCenter(currentPiece)


// console.log(`Moving Piece  -->`, currentPiece)

function moveTetroRight(piece) {
  // To move any tetromineo I want to map over the current positions in the array and add or substract based on the key pressed
  // return piece.map(item => item.map(num => num += 1))
}

function handleKeyPress(e) {


  // removePiece(currentPieceStartingPosition)
  // removePiece(currentPiece)
  removeTetroPiece(currentPiece)

  if(e.keyCode === 39 && currentPiece % width !== width -1) {
    // Right
    // currentPieceStartingPosition++
    // moveTetroRight(currentPiece)

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

  // addPiece(currentPieceStartingPosition)
  //addPiece(currentPiece)
  createTetroPiece(piece)

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