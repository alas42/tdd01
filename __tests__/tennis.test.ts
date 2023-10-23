import { Player, Game } from '../src/tennis';

describe('tennis game', () => {
  it('Should begin the match', () => {
    // given
    const player1 = new Player('player1');
    const player2 = new Player('player2');
    const game = new Game(player1, player2);

    // then
    expect(game.start()).toBe('player1 : love, player2: love'); // test render instead of game
  })

  it('player1 wins a point, he should be at 15 points, player2 at love', () => {
    // given
    const player1 = new Player('player1');
    const player2 = new Player('player2');
    const game = new Game(player1, player2);

    // when
    game.player1.addPoint(); // win point in game class !warning

    // then
    expect(game.player1.getScore()).toBe('15');
    expect(game.player2.getScore()).toBe('love');
  })

  it('player1 wins 4 points, he should win the game, player2 at love', () => {
    // given
    const player1 = new Player('player1');
    const player2 = new Player('player2');
    const game = new Game(player1, player2);

    // when
    for (let i: number = 0; i < 4; i++)
      game.player1.addPoint(); // win point in game class !warning
    // then
    expect(game.player1.getScore()).toBe('win');
    expect(game.player2.getScore()).toBe('love');
  })
})