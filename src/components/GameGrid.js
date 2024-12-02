import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";

const GameGrid = ({ games, onSelectGame, gamesPerPage = 9 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  
  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {/* Grid des jeux */}
      <div className="d-flex flex-wrap">
        {currentGames.map((game, index) => (
          <Card key={index} className="m-2" style={{ width: "18rem" }}>
            <CardImg top width="100%" src={game.thumbnail} alt={game.title} />
            <CardBody>
              <CardTitle tag="h5">{game.title}</CardTitle>
              <a href={game.url}>
                <Button color="primary">Jouer</Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-controls d-flex justify-content-center mt-4">
        <Button
          color="secondary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="me-2"
        >
          Précédent
        </Button>
        <span className="pagination-info">
          Page {currentPage} sur {totalPages}
        </span>
        <Button
          color="secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="ms-2"
        >
          Suivant
        </Button>
      </div>
    </div>
  );
};

GameGrid.propTypes = {
  games: PropTypes.array.isRequired,
  onSelectGame: PropTypes.func,
  gamesPerPage: PropTypes.number,
};

export default GameGrid;
