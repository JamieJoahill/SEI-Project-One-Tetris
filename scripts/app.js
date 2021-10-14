const grid = document.querySelector('.grid')
const button = document.querySelector('button')

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

// const test = [5]
const test = [5, 15]
// hard code a let variable piece of one block

// an array of constational changes values of the co ords

// Tetrominoes Array
const tetrominoes = [i , l, j, t, s, z, o, test]

const piece = test

const newPosition = []

const tempArr = []

let dropInterval


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

// When Button is Clicked the piece will start dropping

// When Run button Clicked run the run game function
function runGame() {

  
    drop()
  

}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 
function moveTetroDown() {
  
}


// ----------
// Adds/Removes a block from the grid using the blocks index

// Takes a piece and places on the grid - removeTetroPiece works the same but does the oppersite
// Uses the cells grid index to add 'block' class to the correct cell in the grid
function createTetroPiece(number) {
  // cells[item].classList.add('block')
  // cells[piece[number]].classList.add('block')
  cells.map(cell => {
    if(Number(cell.innerText) === number) {
      cell.classList.add('block')
    }
  })
}

// cells[piece[0]].classList.add('block')
// cells[piece[1]].classList.add('block')

// console.log(cells[o[0]])
// console.log(cells[o[1]])
// console.log(cells[o[2]])
// console.log(cells[o[3]])
// Takes a piece and removes it on the grid - createTetroPiece works the same but does the oppersite
// Uses the cells grid index to remove 'block' class from a cell in the grid
function removeTetroPiece(number) {
  // cells[item].classList.remove('block')
  //cells[piece[number]].classList.remove('block')
  cells.map(cell => {
    if(Number(cell.innerText) === number) {
      cell.classList.remove('block')
    }
  })
}


// ^^^^^^^^^^^^^^^^^^^^^^

function stoppedTetroPiece(number) {

  clearInterval(dropInterval)

  dropInterval = null // assigns the interval value to null to it can be called again

  cells.map(cell => {
    if(Number(cell.innerText) === number) {
      cell.classList.add('stopped')
      console.log(`This cell -->`,cell)
    }
  })

  drop() // recalls the interval

}

// Manually adding cells into grid with the class of stopped
console.log(cells.forEach(cell => {
  if(Number(cell.innerText) >= 140)
  cell.classList.add('stopped')
}))

// Should loop through each row of cells and check if every cell contains stopped
function checkTetris() {

  cells.forEach(cell => {

    if(Number(cell.innerText) >=  120 && Number(cell.innerText) <=  129) {
      // console.log(cell.classList.contains('stopped'))
      // console.log(cell) // clear and remove these cells
      // cell.classList.remove('stopped')
    }
  
    if(Number(cell.innerText) >=  130 && Number(cell.innerText) <=  139) {
      // console.log(cell.classList.contains('stopped'))
      // console.log(cell) // clear and remove these cells
      // cell.classList.remove('stopped')
    }
  
    if(Number(cell.innerText) >=  140 && Number(cell.innerText) <=  149) {
      // console.log(cell.classList.contains('stopped'))
      // console.log(cell) // clear and remove these cells
      // cell.classList.remove('stopped')
      console.log(cell)
    }
  
    if(Number(cell.innerText) >=  150 && Number(cell.innerText) <=  159) {
      //console.log(cell.classList.contains('stopped'))
      //console.log(cell) // clear and remove these cells
      // cell.classList.remove('stopped')
    }
  
  })

}

checkTetris()



// stoppedTetroPiece(4)
// stoppedTetroPiece(5)
// stoppedTetroPiece(6)


// console.log(cells.map(cell => {
//   if(cell.innerText === '154') {
//     cell.classList.add('stopped')
//   }
// }))


// This will update another tetro piece once a piece has dropped
function updateTetro(item) {
  
}

// collison detection is true or false specify differnt class for moving block

// while travelling the piece should be one color, then change to another color when it has stopped
// I know when the first piece has dropped if `piece[i] + width <= width * height` is true

// Where can I add a class to determine when it is moving ? 
// A piece moves within the drop function

// pass through the co ordinates of the position - iterate through your arrays of co ords and update the values

// generate the shape 
// then the interval
// then when it gets to the bottom the interval stops
// then start up interval again 

// when it gets to the bottom clear the interval 
// then set the value to the drop interval variable to be equal to null 
// call the drop function again



function drop() {


     dropInterval = setInterval(() => {

      for(let i = 0; i < piece.length; i++) {
        createTetroPiece(piece[i])
      }

      for (let i = 0; i < piece.length; i++) { // Removing the piece on the grid
        removeTetroPiece(piece[i])
        // console.log(`piece location->`,piece[i])
      } 
    
      for (let i = 0; i < piece.length; i++) { // Updating the piece Location to a new location - This is where the piece is moving in the grid
        // if piece[i] + width <= 160 - keep adding on width(10)
        //console.log(`What is i -->`, i)

        if(piece[i] + width <= width * height) { // This is where the piece is moving in the grid
          piece[i] += width

          // moveTetroDown(piece[i]) - add this in after break

          // console.log(`test ->`,test)

          // console.log(`piece ->`, piece)

          // console.log(`piece location moving ->`,piece[i])
          console.log(`test[0] + width >= width * height`, test[0] + width >= width * height) // false

          console.log(`test[1] + width >= width * height`,test[1] + width >= width * height) // true

          console.log(`cells[test[1]].classList.contains('stopped')`,cells[test[1]].classList.contains('stopped')) // false

        }

        if(piece[i] + width >= width * height) { // This is where the piece has stopped at the bottom of the grid
          //cells[piece[i]].classList.add('stopped')
          // console.log(`piece[i] + width >= width * height`)
          // console.log(`piece -->`, piece[i])
          // console.log(`piece -->`, piece[i])
          // stoppedTetroPiece(piece[i])

          piece.map(index => {
            stoppedTetroPiece(index)
          })

          // sets the piece back into its original spot
          //piece[i] = 5
          piece[0] = 5
          piece[1] = 15
          // stop(dropInterval)

          // console.log(`piece location at end ->`,piece[i])

        }

        // checking shape at the index of certain position contains the class of stopped block
        // if collision is false you can travel freely 

        // look at each block and map through it and convert it to a locked block 

        // collion works by adding my block, removed block, and then converted it
        
        // I need to check if the piece below is the bottom of the grid or if the pieces are together and then stop both

        // if(cells[piece[i] + width].classList.contains('stopped') || piece[0] + width >= width * height) { // && check for
        // if(cells[test[1]].classList.contains('stopped') && cells[test[1]] + width >= width * height) { 
        //   // set time out in here as you would want to delay the position 

        //   console.log('string')
        //   stop(dropInterval)
        //   //cells[piece[i]].classList.add('stopped') // map through the whole shape add classes and remove
        //   stoppedTetroPiece(piece[i])

        //   // console.log(`What is i -->`,i)

        //   // sets the piece back into its original spot
        //   piece[0] = 5
        //   piece[1] = 15
        // }


        // if piece next cell class is equal to stopped, dont go anymore
        // Checks for the next block below - doesnt check for stacked blocks
        if(cells[piece[i] + width].classList.contains('stopped')) { // && check for
          // set time out in here as you would want to delay the position 
          stop(dropInterval)
          //cells[piece[i]].classList.add('stopped') // map through the whole shape add classes and remove
          // stoppedTetroPiece(piece[i])
          piece.map(index => {
            stoppedTetroPiece(index)
          })

          // console.log(`What is i -->`,i)

          // sets the piece back into its original spot
          piece[0] = 5
          piece[1] = 15
        }


      // console.log(`Checking for Stopped Class 0 -->`, cells[piece[0]].classList.contains('stopped'))
      // console.log(`Checking for Stopped Class 1 -->`, cells[piece[1]].classList.contains('stopped'))

      // console.log(`Looking ahead for Stopped Class 0 -->`, cells[piece[0] + width].classList.contains('stopped'))
      // console.log(`Looking ahead  Stopped Class 1 -->`, cells[piece[1] + width].classList.contains('stopped'))

      // console.log(`Checking for bottom grid 0 -->`, cells[piece[1]] + width >= width * height)
      // console.log(`Checking for bottom grid 1 -->`, cells[piece[1]] + width >= width * height)

      if(cells[piece[i]].classList.contains('stopped')) {
        // console.log(`piece --> `, piece[i])
        // console.log(`piece --> `, piece[i])
        console.log(`cells[piece[i]].classList.contains('stopped')`)
        console.log(`piece --> `, piece[i])
        // stoppedTetroPiece(piece[i])
        piece.map(index => {
          stoppedTetroPiece(index)
        })
      }

      // if(cells[piece[i] + width].classList.contains('stopped') && cells[piece[i]] + width >= width * height) { 
      //   // set time out in here as you would want to delay the position 

      //   console.log(`cells[piece[0] + width].classList.contains('stopped') && cells[piece[1]] + width >= width * height`)
      //   console.log(`piece --> `, piece[i])
      //   stoppedTetroPiece(piece[0])
      //   stoppedTetroPiece(piece[1])

      //   // sets the piece back into its original spot
      //   piece[0] = 5
      //   piece[1] = 15
      // }

      // if(cells[piece[i] + width].classList.contains('stopped')) {
      //   stoppedTetroPiece(piece[i])
      // }




      for (let i = 0; i < piece.length; i++) { // Adding that piece back onto the grid
        createTetroPiece(piece[i])

      }



      }




      
    }, 1000);

}
// console.log(cells.forEach(cell => cell))

// function movePiece(piece) {
//   // console.log(`Move Piece Function -->`, piece)
//   // console.log(piece)
//   // console.log(cells)
// }
// movePiece(currentPiece)


// Find the center point of each Tetromineo, If Cube - then no center point
// function tetrominoesCenter(piece) {
//   if(currentPiece === [4, 5, 14, 15]) {
//     return piece
//   } else {
//     return piece[2]
//   }
// }
// tetrominoesCenter(currentPiece)


// console.log(`Moving Piece  -->`, currentPiece)

function moveTetroRight(piece) {
  // To move any tetromineo I want to map over the current positions in the array and add or substract based on the key pressed
  // piece.map(item => item += 1)
}

function handleKeyPress(e) {

  // removePiece(currentPieceStartingPosition)
  // removePiece(currentPiece)

  for (let i = 0; i < piece.length; i++) { // Removing the piece on the grid
    removeTetroPiece(piece[i])
    // console.log(`piece location->`,piece[i])
  } 
  //removeTetroPiece(piece)

  
  if(e.keyCode === 39 && piece[0] % width !== width -1 && piece[1] % width !== width -1 && piece[2] % width !== width -1 && piece[3] % width !== width -1) {
    // Right
    
    // moveTetroRight(piece)
    // console.log(piece.map(item))
    removeTetroPiece(piece)
    for(let i = 0; i < piece.length; i++) {
      piece[i]++
    }
    createTetroPiece(piece)

    // if(e.keyCode === 39 && !cells[currentPieceStartingPosition + 1].classList.contains('block')) {
    //   currentPieceStartingPosition++
    // }

  } else if(e.keyCode === 37 && piece[0] % width !== 0 && piece[1] % width !== 0 && piece[2] % width !== 0 && piece[3] % width !== 0) {
    // Left
    // piece--

    removeTetroPiece(piece)
    for(let i = 0; i < piece.length; i++) {
      piece[i]--
    }
    createTetroPiece(piece)

    // if(e.keyCode === 37 && !cells[currentPieceStartingPosition - 1].classList.contains('block')) {
    //   currentPieceStartingPosition--
    // }

  } else if(e.keyCode === 38) {
    // Up
    // Rotate Function
    //piece -= width
    console.log(`rotate`)
    // if(e.keyCode === 38 && !cells[currentPieceStartingPosition - 10].classList.contains('block')) {
    //   currentPieceStartingPosition -= width
    // }



  } else if(e.keyCode === 40 && piece[i] + width >= width * height) {
    // Down
    //piece += width

    // I think I would have to stop the movedown function from running so I can then move down with a keypress

    console.log(e.keyCode)

    removeTetroPiece(piece)
    for(let i = 0; i < piece.length; i++) {
      piece[i] += width
    }
    createTetroPiece(piece)
    // if(e.keyCode === 40 && !cells[currentPieceStartingPosition + 10].classList.contains('block')) {
      
    // }
  
  }
  

  // addPiece(currentPieceStartingPosition)
  //addPiece(currentPiece)
  // createTetroPiece(piece)

  for(let i = 0; i < piece.length; i++) {
    createTetroPiece(piece[i])
  }

}



button.addEventListener('click', runGame)
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