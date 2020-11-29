using System.Collections.Generic;

namespace Tennis
{
    public class ScoreBoard
    {
        private int _playerOneScore;
        private int _playerTwoScore;
        private Dictionary<int, string> _scoreOptions;

        public ScoreBoard(int playerOneScore, int playerTwoScore)
        {
            _scoreOptions = new Dictionary<int, string>
            {
                { 0, "love" },
                { 1, "15" },
                { 2, "30" },
                { 3, "40" }
            };
            _playerOneScore = playerOneScore;
            _playerTwoScore = playerTwoScore;
        }

        public int PlayerOneScore { get => _playerOneScore; }
        public int PlayerTwoScore { get => _playerTwoScore; }

        public override string ToString()
        {
            var score = string.Empty;

            if (PlayerOneScore == PlayerTwoScore)
                score = $"{_scoreOptions[PlayerOneScore]} all";
            else
                score = $"{_scoreOptions[PlayerOneScore]} {_scoreOptions[PlayerTwoScore]}";
            return score;
        }
    }
}