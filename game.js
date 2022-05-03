/*
Tic-Tac-Toe Game Calss
Author: bbrianh
*/
var CROSS = "<img src='./img/Cross.png' class='cross'>"
var CRICLE = "<img src='./img/Circle.png' class='cross'>"

class Game {
    constructor() {
        this.board =['', '', '', '', '', '', '', '', ''];
        this.turn = 'O';
    }

    update_board(id) {
        if (this.board[id] == '') {
            this.board[id] = this.turn;
            this.change_turn();
        }
    }

    change_turn() {
        if (this.turn == 'O') {
            this.turn = 'X';
        } 
        else {
            this.turn = 'O';
        }
    }

    display_board() {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i] == 'O') {
                document.getElementById(i).innerHTML = CRICLE;
            }
            else if (this.board[i] == 'X') {
                document.getElementById(i).innerHTML = CROSS;
            }
            else{
                document.getElementById(i).innerHTML = "";
            }
        }
    }

    reset() {
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = '';
        }
        this.turn = 'O';
    }

    get_winner() {
        // check rows
        for (let i = 0; i < this.board.length - 2; i += 3) {
            if (this.board[i] != '' && this.board[i] == this.board[i + 1] && this.board[i] == this.board[i + 2]) {
                return this.board[i];
            }
        }
        // check columns
        for (let i = 0; i < 4; i++) {
            if (this.board[i] != '' && this.board[i] == this.board[i + 3] && this.board[i] == this.board[i + 6]) {
                return this.board[i];
            }
        }
        // check diagonals
        if (this.board[0] != '' && this.board[0] == this.board[4] && this.board[0] == this.board[8]) {
            return this.board[0];
        }
        if (this.board[2] != '' && this.board[2] == this.board[4] && this.board[2] == this.board[6]) {
            return this.board[2];
        }
        // check tie
        for (let i = 0; i < this.board.length; i++) {
            if(this.board[i] == ''){
                return null;
            }
        }
        return "T";
    }
}
