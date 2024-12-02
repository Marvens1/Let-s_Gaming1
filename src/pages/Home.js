import React from "react";
import GameGrid from "../components/GameGrid";

const Home = ({ games }) => {
  
  
  return (
    <div>
      <h1>Jeux disponibles</h1>
      {games ? (
        <GameGrid games={games} />
      ) : (
        <p>Aucun jeu trouvé. Chargement en cours...</p>
      )}
    </div>
  );
};

export default Home;
