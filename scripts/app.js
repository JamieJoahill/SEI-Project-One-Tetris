const grid = document.querySelector('.grid')
const button = document.querySelector('button')
const resetButton = document.querySelector('reset-btn')

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
// const i = [3, 4, 5, 6]
// const l = [14, 4, 5, 6]
// const j = [4, 5, 6, 16]
// const t = [4, 5, 6, 15]
// const s = [14, 15, 5, 6]
// const z = [4, 5, 15, 16]
// const o = [4, 5, 14, 15]

const i = {
  name: 'i',
  startLocations: [3, 4, 5, 6],
  currentLocations: [3, 4, 5, 6],
  rotation: [3, 4, 5, 6]
}


const l = {
  name: 'l',
  startLocations: [14, 4, 5, 6],
  currentLocations: [14, 4, 5, 6]
}

const j = {
  name: 'j',
  startLocations: [4, 5, 6, 16],
  currentLocations: [4, 5, 6, 16]
}

const t = {
  name: 't',
  startLocations: [4, 5, 6, 15],
  currentLocations: [4, 5, 6, 15]
}

const s = {
  name: 's',
  startLocations: [14, 15, 5, 6],
  currentLocations: [14, 15, 5, 6]
}

const z = {
  name: 'z',
  startLocations: [4, 5, 15, 16],
  currentLocations: [4, 5, 15, 16]
}

const o = {
  name: 'o',
  startLocations: [4, 5, 14, 15],
  currentLocations: [4, 5, 14, 15]
}

const test = {
  name: 'test',
  startLocations: [5, 15],
  currentLocations: [5, 15]
}

// Tetrominoes Array
const tetrominoes = [i , l, j, t, s, z, o]

const tetrisRows = []

let activePiece = null

let score = null
let highScore = null
let gameSpeed = 1000

let gameInterval

let dropInterval

function randomPiece() { // Generates a random piece and assigns it to active piece
  const randomNumber = Math.floor(Math.random() * tetrominoes.length)
  activePiece = tetrominoes[randomNumber] // tetrominoes[randomNumber]
}

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
    playAudio()
    randomPiece() // pick a piece
    addPiece(activePiece.currentLocations)// add a piece
    movePiece('first')// call function to start timer
    
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^




// ----------
// Adds/Removes a block from the grid using the blocks index

// Takes a piece and places on the grid - removeTetroPiece works the same but does the oppersite
// Uses the cells grid index to add 'block' class to the correct cell in the grid
// function createTetroPiece(number) {
//   // cells[item].classList.add('block')
//   // cells[piece[number]].classList.add('block')
//   cells.map(cell => {
//     if(Number(cell.innerText) === number) {
//       cell.classList.add('block')
//     }
//   })
// }


// const test = {
//   name: 'test',
//   startLocations: [5, 15],
//   currentLocations: [5, 15],
//   isActive: false
// }


// Takes in the active piece loops over all indexs in the postitions array and then sets that position on the grid with an active
function addPiece(positions) {
  positions.forEach(block => {
    cells[block].classList.add(activePiece.name, 'active')
    // block.isActive = true
  })
}

// Takes in the active piece loops over all indexs in the postitions array and then removes that position on the grid with an active
function removePiece(positions) {
  positions.forEach(block => {
    cells[block].classList.remove(activePiece.name)
    cells[block].classList.remove('active')
    // block.isActive = false
  })
}

function stopAndResetPiece() {
  // stop timer
  // set current postion of active piece to be equal to current position
  // Set timer back to null
  // Set Bool isActive from true to false
  // call move piece again to get a new piece 
  clearInterval(gameInterval)
  activePiece.currentLocations.forEach(block => cells[block].classList.remove('active'))
  activePiece.currentLocations = [...activePiece.startLocations]
  gameInterval = null
  // activePiece.isActive = false
  movePiece()
}

// function checkTetris() {

//   // I can check if a piece is in a cell with cell.classList.length === 2
//   // I push that piece into the tetrisRows array. 
//   // check through the array and if the value is there dont push into array

//   // start with altering how to push items in the array 

//   cells.forEach(cell => {

//     if(cell.classList.length === 2) {
//       tetrisRows.push(cell)
//     }

//     // console.log(`Cell Classlist Length -->`, cell.classList.length)
//     // if(cell.classList.length === 2 && tetrisRows.indexOf(cell) === -1) {
//     //   tetrisRows.push(cell.innerText)
//     //   console.log(`Tetris Rows Array -->`, tetrisRows)
//     // }

//   })

// }

// checkTetris()


// const rows = {
//   zero: cells.slice(0,10),
//   one: cells.slice(10, 20),
//   two: cells.slice(20, 30),
//   three: cells.slice(30, 40),
//   four: cells.slice(40, 50),
//   five: cells.slice(50, 60),
//   six: cells.slice(60, 70),
//   seven: cells.slice(70, 80),
//   eight: cells.slice(80, 90),
//   nine: cells.slice(90, 100),
//   ten: cells.slice(100, 110),
//   eleven: cells.slice(110, 120),
//   twelve: cells.slice(120, 130),
//   thirteen: cells.slice(130, 140),
//   fourteen: cells.slice(140, 150),
//   fifteen: cells.slice(150, 160)
// }

// const rowsArray = [
//   [cells.slice(0,10)],
//   [cells.slice(10, 20)]
// ]

const rows = []

// for(let i = 0; i < height; i++) {
//   // console.log(height)
//   rows.push([])
//   for(let j = 0; j < width; j++) {
//     rows[i].push(j)
//   }
// }

for(let i = 0; i < height; i++) {
  rows.push([])
}

cells.forEach(cell => {
    if(Number(cell.innerText) >= 0 && Number(cell.innerText) < 10) {
      rows[0].push(Number(cell.innerText))
    }  
    if(Number(cell.innerText) >= 10 && Number(cell.innerText) < 20) {
      rows[1].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 20 && Number(cell.innerText) < 30) {
      rows[2].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 30 && Number(cell.innerText) < 40) {
      rows[3].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 40 && Number(cell.innerText) < 50) {
      rows[4].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 50 && Number(cell.innerText) < 60) {
      rows[5].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 60 && Number(cell.innerText) < 70) {
      rows[6].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 70 && Number(cell.innerText) < 80) {
      rows[7].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 80 && Number(cell.innerText) < 90) {
      rows[8].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 90 && Number(cell.innerText) < 100) {
      rows[9].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 100 && Number(cell.innerText) < 110) {
      rows[10].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 110 && Number(cell.innerText) < 120) {
      rows[11].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 120 && Number(cell.innerText) < 130) {
      rows[12].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 130 && Number(cell.innerText) < 140) {
      rows[13].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 140 && Number(cell.innerText) < 150) {
      rows[14].push(Number(cell.innerText))
    }
    if(Number(cell.innerText) >= 150 && Number(cell.innerText) < 160) {
      rows[15].push(Number(cell.innerText))
    }
})

function checkGridRows() {
  for(let i = 0; i < rows.length; i++) {
    // console.log(rows[i])
    const gridRows = rows[i]
    const gridRowsFull = gridRows.every(position => cells[position].classList.length === 2)
    if(gridRowsFull) {
      rows[i].forEach(position => {
        cells[position].classList.remove('i') 
        cells[position].classList.remove('l')
        cells[position].classList.remove('j')
        cells[position].classList.remove('t')
        cells[position].classList.remove('s')
        cells[position].classList.remove('z')
        cells[position].classList.remove('o')
      })
      score += 100
    }
  }
}


// const bottomRow = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159]

// function checkBottomRowAndClear() {

//   const bottomRowIsFull = bottomRow.every(position => cells[position].classList.length === 2)

//   // console.log('bottom row full', bottomRowIsFull)

//   if(bottomRowIsFull) {
//     // somehow loop through cells and remove classes that correspond to the shape
//     // something like this maybe
//     bottomRow.forEach(position => {
//       cells[position].classList.remove('i') 
//       cells[position].classList.remove('l')
//       cells[position].classList.remove('j')
//       cells[position].classList.remove('t')
//       cells[position].classList.remove('s')
//       cells[position].classList.remove('z')
//       cells[position].classList.remove('o')
//     })
// }}

function trackGameSpeed() {
  if(score > 100) gameSpeed = 900
  if(score > 200) gameSpeed = 800
  if(score > 300) gameSpeed = 700
  if(score > 400) gameSpeed = 650
  if(score > 500) gameSpeed = 600
  if(score > 600) gameSpeed = 500
}

function movePiece(first) {

  if(!first) randomPiece()

  gameInterval = setInterval(() => { // The game runs inside this interval

    //checkBottomRowAndClear()
    setInterval(() => {
      checkGridRows()
    }, 300)
    // console.log(`Score -->`,score)
    trackGameSpeed()

    const hasHitBottom = activePiece.currentLocations.some(position => position > 149) // will be true or false if some of the indexs in the array meet this condition

    // console.log(activePiece.currentLocations)

    const hasHitPiece = !hasHitBottom ? activePiece.currentLocations.some(position => {
      // console.log(cells[position + width].classList)
      return cells[position + width].classList.length === 2 // checks if that classes at this position contain 2
    }) : false 

    // console.log(hasHitPiece)

    if(hasHitPiece && !first) {
      stopAndResetPiece()
      return // The return here lets you do the function and then stop without doing the other if statement
    }

    if(hasHitBottom) {
      stopAndResetPiece()
      return // The return here lets you do the function and then stop without doing the other if statement
    }
    
    // Default shape behaviour
    removePiece(activePiece.currentLocations) // remove a piece from this location
    activePiece.currentLocations = activePiece.currentLocations.map(position => position + width) // updates the piece location
    addPiece(activePiece.currentLocations) // adds the piece back at the new location
    // console.log(tetrisRows)

  }, gameSpeed)

}



// cells.slice(150, 159)

// console.log(cells.slice(150, 160))

// cells.forEach(cell => {
//   if(Number(cell.innerText) >= 140 && Number(cell.innerText) <= 148) {
//     cell.classList.add('stopped')
//   }

function rotate() {
  // console.log(activePiece.currentLocations[1]) stays the same
  console.log('Rotate')
  // removePiece(activePiece.currentLocations)
  // activePiece.currentLocations = activePiece.currentLocations.map(position => console.log(position))
  // addPiece(activePiece.currentLocations)
}


// console.log(activePiece.currentLocations)

// function to handle keys
// remove from active piece current positions 
// key what key is being pressed
// redefine value of active piece current positions because its different based on keys
// use the map to reassign the values of active piece current positions
// check key press first then handle conditions
// console.log key presses are registering
const audio = document.querySelector('audio')
function playAudio() {
  audio.src = `./audio/Verbalase Low Tetris Beatbox (FULL VIDEO) - Bruh Momento.mp3`
  audio.play()
}


function handleKeyPress(event) {
  // console.log(event.keyCode)

  const key = event.keyCode

  if(key === 38) { // Up
    // Rotate
    rotate()
  }
  

  if(key === 39 && activePiece.currentLocations[0] % width !== width - 1 && activePiece.currentLocations[1] % width !== width - 1 && activePiece.currentLocations[2] % width !== width - 1 && activePiece.currentLocations[3] % width !== width - 1) { // Right

  

      removePiece(activePiece.currentLocations) // remove a piece from this location
      activePiece.currentLocations = activePiece.currentLocations.map(position => position + 1) // updates the piece location
      addPiece(activePiece.currentLocations) // adds the piece back at the new location

    

  }

  if(key === 40 && activePiece.currentLocations[0] + width <= cellCount && activePiece.currentLocations[1] + width <= cellCount && activePiece.currentLocations[2] + width <= cellCount && activePiece.currentLocations[3] + width <= cellCount) { // Down
    removePiece(activePiece.currentLocations) // remove a piece from this location
    activePiece.currentLocations = activePiece.currentLocations.map(position => position + width) // updates the piece location
    addPiece(activePiece.currentLocations) // adds the piece back at the new location
  }

  if(key === 37 && activePiece.currentLocations[0] % width !== 0 && activePiece.currentLocations[1] % width !== 0 && activePiece.currentLocations[2] % width !== 0 && activePiece.currentLocations[3] % width !== 0) { // Left
    removePiece(activePiece.currentLocations) // remove a piece from this location
    activePiece.currentLocations = activePiece.currentLocations.map(position => position - 1) // updates the piece location
    addPiece(activePiece.currentLocations) // adds the piece back at the new location
  }
}




document.addEventListener('keydown', handleKeyPress)






// cells[piece[0]].classList.add('block')
// cells[piece[1]].classList.add('block')

//  (cells[o[0]])
//  (cells[o[1]])
//  (cells[o[2]])
//  (cells[o[3]])
// Takes a piece and removes it on the grid - createTetroPiece works the same but does the oppersite
// Uses the cells grid index to remove 'block' class from a cell in the grid
// function removeTetroPiece(number) {
//   // cells[item].classList.remove('block')
//   //cells[piece[number]].classList.remove('block')
//   cells.map(cell => {
//     if(Number(cell.innerText) === number) {
//       cell.classList.remove('block')
//     }
//   })
// }


// ^^^^^^^^^^^^^^^^^^^^^^

function stoppedTetroPiece(number) {

  clearInterval(dropInterval)

  dropInterval = null // assigns the interval value to null to it can be called again

    cells.map(cell => {
      if(Number(cell.innerText) === number) {
        cell.classList.add('stopped')
      }
    })

  drop() // recalls the interval


}

// Manually adding cells into grid with the class of stopped
// cells.forEach(cell => {
//   if(Number(cell.innerText) >= 140 && Number(cell.innerText) <= 148) {
//     cell.classList.add('stopped')
//   }

//   if(Number(cell.innerText) >= 150 && Number(cell.innerText) <= 159) {
//     cell.classList.add('stopped')
//   }
// })

// cells.forEach(cell => {
//   if()
// })


// stoppedTetroPiece(4)
// stoppedTetroPiece(5)
// stoppedTetroPiece(6)


//  (cells.map(cell => {
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
        //  (`piece location->`,piece[i])
      } 
    
      for (let i = 0; i < piece.length; i++) { // Updating the piece Location to a new location - This is where the piece is moving in the grid
        // if piece[i] + width <= 160 - keep adding on width(10)
        // (`What is i -->`, i)

        if(piece[i] + width <= width * height) { // This is where the piece is moving in the grid
          piece[i] += width

          // moveTetroDown(piece[i]) - add this in after break

          // checkTetris()

          //  (`test ->`,test)

          //  (`piece ->`, piece)

          //  (`piece location moving ->`,piece[i])
          //  (`test[0] + width >= width * height`, test[0] + width >= width * height) // false

          //  (`test[1] + width >= width * height`,test[1] + width >= width * height) // true

          //  (`cells[test[1]].classList.contains('stopped')`,cells[test[1]].classList.contains('stopped')) // false

        }

        if(piece[i] + width >= width * height) { // This is where the piece has stopped at the bottom of the grid
          //cells[piece[i]].classList.add('stopped')
          //  (`piece[i] + width >= width * height`)
          //  (`piece -->`, piece[i])
          //  (`piece -->`, piece[i])
          // stoppedTetroPiece(piece[i])

          piece.map(index => {
            stoppedTetroPiece(index)
          })

          // sets the piece back into its original spot
          //piece[i] = 5
          piece[0] = 5
          piece[1] = 15
          // stop(dropInterval)

          //  (`piece location at end ->`,piece[i])

        }

        // checking shape at the index of certain position contains the class of stopped block
        // if collision is false you can travel freely 

        // look at each block and map through it and convert it to a locked block 

        // collion works by adding my block, removed block, and then converted it
        
        // I need to check if the piece below is the bottom of the grid or if the pieces are together and then stop both

        // if(cells[piece[i] + width].classList.contains('stopped') || piece[0] + width >= width * height) { // && check for
        // if(cells[test[1]].classList.contains('stopped') && cells[test[1]] + width >= width * height) { 
        //   // set time out in here as you would want to delay the position 

        //    ('string')
        //   stop(dropInterval)
        //   //cells[piece[i]].classList.add('stopped') // map through the whole shape add classes and remove
        //   stoppedTetroPiece(piece[i])

        //   //  (`What is i -->`,i)

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

          //  (`What is i -->`,i)

          // sets the piece back into its original spot
          piece[0] = 5
          piece[1] = 15
        }


      //  (`Checking for Stopped Class 0 -->`, cells[piece[0]].classList.contains('stopped'))
      //  (`Checking for Stopped Class 1 -->`, cells[piece[1]].classList.contains('stopped'))

      //  (`Looking ahead for Stopped Class 0 -->`, cells[piece[0] + width].classList.contains('stopped'))
      //  (`Looking ahead  Stopped Class 1 -->`, cells[piece[1] + width].classList.contains('stopped'))

      //  (`Checking for bottom grid 0 -->`, cells[piece[1]] + width >= width * height)
      //  (`Checking for bottom grid 1 -->`, cells[piece[1]] + width >= width * height)

      if(cells[piece[i]].classList.contains('stopped')) {
        //  (`piece --> `, piece[i])
        //  (`piece --> `, piece[i])
        //  (`cells[piece[i]].classList.contains('stopped')`)
        //  (`piece --> `, piece[i])
        // stoppedTetroPiece(piece[i])
        piece.map(index => {
          stoppedTetroPiece(index)
        })
      }

      // if(cells[piece[i] + width].classList.contains('stopped') && cells[piece[i]] + width >= width * height) { 
      //   // set time out in here as you would want to delay the position 

      //    (`cells[piece[0] + width].classList.contains('stopped') && cells[piece[1]] + width >= width * height`)
      //    (`piece --> `, piece[i])
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
//  (cells.forEach(cell => cell))

// function movePiece(piece) {
//   //  (`Move Piece Function -->`, piece)
//   //  (piece)
//   //  (cells)
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


//  (`Moving Piece  -->`, currentPiece)

function moveTetroRight(piece) {
  // To move any tetromineo I want to map over the current positions in the array and add or substract based on the key pressed
  // piece.map(item => item += 1)
}

// function handleKeyPress(e) {

//   // removePiece(currentPieceStartingPosition)
//   // removePiece(currentPiece)

//   for (let i = 0; i < piece.length; i++) { // Removing the piece on the grid
//     removeTetroPiece(piece[i])
//     //  (`piece location->`,piece[i])
//   } 
//   //removeTetroPiece(piece)

  
//   if(e.keyCode === 39 && piece[0] % width !== width -1 && piece[1] % width !== width -1 && piece[2] % width !== width -1 && piece[3] % width !== width -1) {
//     // Right
    
//     // moveTetroRight(piece)
//     //  (piece.map(item))
//     removeTetroPiece(piece)
//     for(let i = 0; i < piece.length; i++) {
//       piece[i]++
//     }
//     createTetroPiece(piece)

//     // if(e.keyCode === 39 && !cells[currentPieceStartingPosition + 1].classList.contains('block')) {
//     //   currentPieceStartingPosition++
//     // }

//   } else if(e.keyCode === 37 && piece[0] % width !== 0 && piece[1] % width !== 0 && piece[2] % width !== 0 && piece[3] % width !== 0) {
//     // Left
//     // piece--

//     removeTetroPiece(piece)
//     for(let i = 0; i < piece.length; i++) {
//       piece[i]--
//     }
//     createTetroPiece(piece)

//     // if(e.keyCode === 37 && !cells[currentPieceStartingPosition - 1].classList.contains('block')) {
//     //   currentPieceStartingPosition--
//     // }

//   } else if(e.keyCode === 38) {
//     // Up
//     // Rotate Function
//     //piece -= width
//      (`rotate`)
//     // if(e.keyCode === 38 && !cells[currentPieceStartingPosition - 10].classList.contains('block')) {
//     //   currentPieceStartingPosition -= width
//     // }



//   // } else if(e.keyCode === 40 && piece[0] + width <= width * height || piece[1] + width <= width * height || piece[2] + width <= width * height || piece[3] + width <= width * height) {
//   //   // Down
//   //   //piece += width

//   //   // I think I would have to stop the movedown function from running so I can then move down with a keypress

//   //   //  (e.keyCode)

//   //   removeTetroPiece(piece)
//   //   for(let i = 0; i < piece.length; i++) {
//   //     piece[i] += width
//   //   }
//   //   createTetroPiece(piece)
//   //   // if(e.keyCode === 40 && !cells[currentPieceStartingPosition + 10].classList.contains('block')) {
      
//   //   // }
  
//   }
  

//   // addPiece(currentPieceStartingPosition)
//   //addPiece(currentPiece)
//   // createTetroPiece(piece)

//   for(let i = 0; i < piece.length; i++) {
//     createTetroPiece(piece[i])
//   }

// }



button.addEventListener('click', runGame)
//document.addEventListener('keydown', handleKeyPress)




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

  //    ('Rotate 90 deg function')


  // } else if(e.keyCode === 40 && currentPiece + width <= width * 12 - 1) {
  //   // Down
  //   if(e.keyCode === 40 && !cells[currentPiece + 10].classList.contains('block')) {
  //     currentPiece += width
  //   }
  
  // }

  // addPiece(currentPiece)