using Microsoft.VisualStudio.TestTools.UnitTesting;
using Tennis;

namespace TennisKata01
{
    [TestClass]
    public class TennisGameTests
    {
        private Game _game;

        [TestInitialize]
        public void Initialise()
        {
            _game = new Game();
        }

        [TestMethod]
        public void NewGame_ScoreIsLoveAll()
        {
            Assert.AreEqual("love all", _game.GetScore());
        }

        [TestMethod]
        public void PlayerOneScoresFirst_ScoreIs15Love()
        {
            _game.PlayerOneScores();
            Assert.AreEqual("15 love", _game.GetScore());
        }

        [TestMethod]
        public void PlayerTwoScoresFirst_ScoreIsLove15()
        {
            _game.PlayerTwoScores();
            Assert.AreEqual("love 15", _game.GetScore());
        }

        [TestMethod]
        public void BothPlayersScore_ScoreIs15All()
        {
            _game.PlayerOneScores();
            _game.PlayerTwoScores();
            Assert.AreEqual("15 all", _game.GetScore());
        }
    }
}
