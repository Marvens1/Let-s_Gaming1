import React from "react";
import PropTypes from "prop-types";





const GamePlayer = ({ gameUrl, onClose }) => (
  <div className="game-player">
    <button onClick={onClose} className="close-btn">
      Fermer
    </button>
    <iframe
      src={gameUrl}
      width="800"
      height="450"
      scrolling="none"
      frameBorder="0"
      title="Game Player"
      style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
    />
  </div>
);

GamePlayer.propTypes = {
  gameUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GamePlayer;
