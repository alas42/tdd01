"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Player = void 0;
class Player {
    constructor(name) {
        this.name = "";
        this.score = Score.love;
        this.name = name;
    }
    getScore() {
        return score2[this.score]; //works
    }
    addPoint() {
        this.score++;
    }
}
exports.Player = Player;
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    start() {
        return `${this.player1.name} : ${this.player1.getScore()}, ${this.player2.name}: ${this.player1.getScore()}`;
    }
}
exports.Game = Game;
var Score;
(function (Score) {
    Score[Score["love"] = 0] = "love";
    Score[Score["fifteen"] = 1] = "fifteen";
    Score[Score["thirty"] = 2] = "thirty";
    Score[Score["forty"] = 3] = "forty";
    Score[Score["egality"] = 4] = "egality";
    Score[Score["advantage"] = 5] = "advantage";
})(Score || (Score = {}));
let score2 = ['love', '15', '30', '40', 'egality', 'advantage'];
