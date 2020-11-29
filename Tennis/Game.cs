namespace Tennis
{
    public class Game
    {
        private ScoreBoard _scoreBoard;

        public Game()
        {
            _scoreBoard = new ScoreBoard(0, 0);
        }

        public void PlayerOneScores()
        {
            _scoreBoard = new ScoreBoard(_scoreBoard.PlayerOneScore + 1, _scoreBoard.PlayerTwoScore);
        }

        public void PlayerTwoScores()
        {
            _scoreBoard = new ScoreBoard(_scoreBoard.PlayerOneScore, _scoreBoard.PlayerTwoScore + 1);
        }

        public string GetScore()
        {
            return _scoreBoard.ToString();
        }


    }
}
