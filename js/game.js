'use strict'

const WALL = '#'
const FOOD = '.'
const EMPTY = ' '
const SUPER_FOOD = '🍿'

const gGame = {
    score: 1,
    isOn: false,
    foodCount: 56
}
var gBoard

function init() {
    var elModal = document.querySelector('.modal')
    elModal.hidden=true
    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard)
    
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
            }
            else if(i===1 && j===1 || i===1 && j===8 || i===8 && j===1 || i===8 && j===8) board[i][j]=SUPER_FOOD
        }
    }
    return board
}

function updateScore(diff) {
    // TODO: update model and dom
    // Model
    gGame.score += diff

    // DOM
    const elScore = document.querySelector('span')
    elScore.innerText = gGame.score
}

function gameOver() {

    console.log('Game Over')
    var elModal = document.querySelector('.modal')
    elModal.querySelector('span').innerText = (gGame.foodCount===0) ? 'Won' : 'Lost'
    elModal.hidden = false
    gGame.isOn = false
    gGame.score=1
    gGame.foodCount=59
    
}

