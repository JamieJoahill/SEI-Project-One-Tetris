
# Project 1 - Tetris

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641899904/ReadMe%20images/Project%201%20-%20Tetris%20/Image1_bhbq0m.png)



## Overview

This was my first project I took at General Assembly. It was a solo project and we were allocated a week. The game is based on the original Tetris and it was built using a grid which was generated with JavaScript.

Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.

## Deployment

[Deployed project link](https://jamiejoahill.github.io/SEI-Project-One-Tetris/)

## Time frame

1 week
## Technical Requirements

* Render a game in the browser. 
* Be built on a grid: Cannot use HTML Canvas.
* Design logic for winning and visually display which player won.
* Include separate HTML, CSS, JavaScript files. 
* Use JavaScript for DOM Manipulation.
* Deploy your game online.
* Use semantic markup for HTML and CSS (adhere to best practices).

## Tech Stack

| Front-end | Other tools |
|:----------| :-----------|
| HTML | Google dev tools |
| CSS | 
| JavaScript |

## Planning

#### Build process ####

* Built out the game grid.

* Mapped out the keyboard controls. 

* Generated a test piece on the grid.

* Dropped the test piece down the grid.

* Worked on making the test piece move around the grid.

* Implemented collision detection on walls and floor.

## Visuals

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641899904/ReadMe%20images/Project%201%20-%20Tetris%20/Image1_bhbq0m.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641899905/ReadMe%20images/Project%201%20-%20Tetris%20/image2_qbzmyd.png)
## Build

I started the build out by selecting the HTML element in JavaScript 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901567/ReadMe%20images/Project%201%20-%20Tetris%20/htmlselection_nrx82k.png)
![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901569/ReadMe%20images/Project%201%20-%20Tetris%20/selectinggrid_lkp6ni.png)

Now I had the grid div element selected. I could move on to creating the function that would generate a grid that I could use within my game. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901567/ReadMe%20images/Project%201%20-%20Tetris%20/grid_elements_esjtx8.png)

I choose to store the width and height in a const as this would allow me to quickly change the dimensions if I needed to. I then used those variables to calculate the grid cell count which I then used in my createGrid function below. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901567/ReadMe%20images/Project%201%20-%20Tetris%20/gridfunction_xzmej5.png)

This createGrid function is the backbone of my game. Without this function the game would not exist. I looped through the cellCount, created a div element and then appended that into the grid element I selected in the HTML. I had pushed each cell into a cells array which I could then use later to determine where everything was within my Grid.

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901567/ReadMe%20images/Project%201%20-%20Tetris%20/cells_rrndr4.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/testpiece_mqdbaq.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901567/ReadMe%20images/Project%201%20-%20Tetris%20/lpiece_lhhx8w.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/tetrominoesarr_u77ibi.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901567/ReadMe%20images/Project%201%20-%20Tetris%20/activepiece_ixsauf.png)

This randomPiece function generates a random piece and then assigns it to the activePiece variable. I used the tetrominoes array to select a random piece using the randomNumber that I generated based on the length of the tetrominoes array. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/tetrominoesarr_u77ibi.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/randompiecefunc_t8vfyg.png)

The runGame function gets invoked when the user clicks on the start button. It first adds a reset button over the start button. It then kicks in the game's audio, with the playAudio function. The function calls the randomPiece function which selects a random piece for the player. It then calls the addPiece function which adds that piece into the grid. Finally it calls the movePiece function which moves the random piece around the grid.

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/rungamefunc_lzjea9.png)

This is a simple resetGame function which fires off when the user clicks the reset button. It used the built in browser window object to reload the page. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/resetgamefunc_ggecak.png)

The addPiece and removePiece functions need to work together. The addPiece function works by looping through and adding the class ‘active’ to the relevant cell. The removePiece function works in the opposite way by removing the class from that cell. These two functions are used to draw pieces onto the grid. They fire off when a piece is dropping down the grid or being moved by the user input. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/addpiece_wdlyhw.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/removepiece_xvebsf.png)

This function is used to set the piece into its place on the grid. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641901568/ReadMe%20images/Project%201%20-%20Tetris%20/stopandresetfunc_azlvpj.png)

Almost all of the game logic is used inside the movePiece function which is called on the game's start and also during stopAndResetPiece. This logic is all placed within a setInterval that fires off based on the game's score. The higher the score the faster the game will progress.

## Bugs

Rotation is not included within this implementation of the game.
## Blockers

The main blocker I faced when creating this game was the rotation of the pieces. 
## Wins

The overall win for me would be a much better understanding of JavaScript and programming in general. I felt really proud of what I managed to achieve in the timeframe. I am just so happy with how much this project helped me develop throughout the course.
## Future Features

A future feature I would like to add within this game would be the rotation of the Tetriminios. 
## Blockers / Challenges

By far the largest challenge here is the rotation of the Tetriminos. Each one rotates around a specific point on its axis. Also some Tetriminos, particularly the long bar, create problems when turning next to the walls of the game board. Furthermore, once a line has been made, the blocks above have to all shift down a row to fill the space, which requires a good amount of recursion.

I found the rotation of the Tetriminos to be the hardest challenge and I knew this from the beginning but I wanted to challenge and push myself to see how much I could learn in the process of creating the game. 

## Key Learnings

* A better understanding of the logic used in computer programming.
* Being confident in my abilities to produce a game.
* Not being afraid to write code that can be thrown away, to get a better understanding of how it can be improved. 
* Having the drive to face a tough challenge head on. 
