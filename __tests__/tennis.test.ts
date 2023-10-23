import { Player, Game } from '../src/tennis';

describe('tennis game', () => {
  it('Should begin the match', () => {
    const player1 = new Player('player1');
    const player2 = new Player('player2');
    const game = new Game(player1, player2);

    expect(game.start()).toBe('player1 : love, player2: love');
  })

  it('player1 should be at 15 points, player2 at love', () => {
    const player1 = new Player('player1');
    const player2 = new Player('player2');
    const game = new Game(player1, player2);
    game.player1.addPoint();
    expect(game.player1.getScore()).toBe('15');
  })
})