let scores;

function initialiseGame() {
  scores = {
    'Player 1': 0,
    'Player 2': 0
  };
}

function score(player) {
  scores[player] += 1;
}

function currentScore() {
  if (scores['Player 1'] == scores['Player 2'])
    return buildMatchingScoreText();

  return buildMismatchingScoreText();
}

function getScoreTerm(score) {
  const scoreNames = {
    0: 'love',
    1: '15',
    2: '30',
    3: '40'
  };

  if (score >= scoreNames.length)
    return 'advantage';

  return scoreNames[score];
}

function buildMatchingScoreText() {
  if (scores['Player 1'] == 0)
    return 'love all';

  if (scores['Player 1'] == 1)
    return '15 all';

  if (scores['Player 1'] == 2)
    return '30 all';

  if (scores['Player 1'] >= 3)
    return 'deuce';
}

function buildMismatchingScoreText() {
  if (scores['Player 1'] > 3) {
    if (scores['Player 1'] - scores['Player 2'] == 1)
      return 'advantage player 1';
    else
      return 'player 1 wins';
  }
  if (scores['Player 2'] > 3) {
    if (scores['Player 2'] - scores['Player 1'] == 1)
      return 'advantage player 2';
    else
      return 'player 2 wins';
  }

  return `${getScoreTerm(scores['Player 1'])} ${getScoreTerm(scores['Player 2'])}`;
}

export {
  initialiseGame,
  score,
  currentScore
};