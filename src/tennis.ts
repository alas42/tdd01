export class Player {
	name: string = "";
	score: Score = Score.love;
	
	constructor(name: string){
		this.name = name;
	}
	public getScore(){
		return score2[this.score]; //works
	}
	public addPoint(): void {
		this.score++;
	}
}

export class Game {
	player1: Player;
	player2: Player;

	constructor(player1: Player, player2: Player){
		this.player1 = player1;
		this.player2 = player2;
	}

  start() {
    return `${this.player1.name} : ${this.player1.getScore()}, ${this.player2.name}: ${this.player1.getScore()}`;
  }
}

enum Score {
	love = 0,
	fifteen = 1,
	thirty = 2,
	forty = 3,
	egality = 4,
	advantage = 5,
	win = 6
}
let score2: Array<string> = ['love', '15', '30', '40', 'egality', 'advantage', "win"]; 