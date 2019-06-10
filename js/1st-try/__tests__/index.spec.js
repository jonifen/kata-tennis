import { initialiseGame, score, currentScore } from '../src/tennis-game';

describe('Tennis game', () => {
  beforeEach(() => {
    initialiseGame();
  });

  it('When player 1 scores first, the score should be "15 love"', () => {
    score('Player 1');
    expect(currentScore()).toBe('15 love');
  });

  it('When player 2 scores first, the score should be "love 15"', () => {
    score('Player 2');
    expect(currentScore()).toBe('love 15');
  });

  it('When both player 1 and 2 score 3 times, the score should be "deuce"', () => {
    scoreMultipleTimes('Player 1', 3);
    scoreMultipleTimes('Player 2', 3);
    expect(currentScore()).toBe('deuce');
  });

  it('When both player 1 scores 4 times and player 2 scores 3 times, the score should be "advantage player 1"', () => {
    scoreMultipleTimes('Player 1', 4);
    scoreMultipleTimes('Player 2', 3);
    expect(currentScore()).toBe('advantage player 1');
  });

  it('When both player 1 scores 5 times and player 2 scores 4 times, the score should be "advantage player 1"', () => {
    scoreMultipleTimes('Player 1', 5);
    scoreMultipleTimes('Player 2', 4);
    expect(currentScore()).toBe('advantage player 1');
  });

  it('When both player 1 scores 3 times and player 2 scores 4 times, the score should be "advantage player 1"', () => {
    scoreMultipleTimes('Player 1', 3);
    scoreMultipleTimes('Player 2', 4);
    expect(currentScore()).toBe('advantage player 2');
  });

  it('When both players have scored once, the score should be "15 all"', () => {
    score('Player 1');
    score('Player 2');
    expect(currentScore()).toBe('15 all');
  });

  it('When player 1 scores 4 times, and player 2 twice, the score should be "player 1 wins"', () => {
    scoreMultipleTimes('Player 1', 4);
    scoreMultipleTimes('Player 2', 2);
    expect(currentScore()).toBe('player 1 wins');
  });

  it('When player 2 scores 4 times, and player 1 twice, the score should be "player 2 wins"', () => {
    scoreMultipleTimes('Player 1', 2);
    scoreMultipleTimes('Player 2', 4);
    expect(currentScore()).toBe('player 2 wins');
  });
});

function scoreMultipleTimes(playerName, timesToScore) {
  for (let i = 0; i < timesToScore; i++) {
    score(playerName);
  }
}