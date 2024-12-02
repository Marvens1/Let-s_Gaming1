import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Collapse, Button } from 'reactstrap';
import './Sidebar.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar">
      <h5 className="sidebar-title">Filtres de Jeux</h5>

      {/* Bouton pour ouvrir/fermer les filtres */}
      <Button color="primary" onClick={toggleCollapse} className="toggle-button">
        {isOpen ? 'Cacher les filtres' : 'Afficher les filtres'}
      </Button>

      <Collapse isOpen={isOpen}>
        <ListGroup className="filter-group">
          
          {/* Filtre par Catégorie */}
          <ListGroupItem className="filter-title">Catégories</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/action">Action</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/aventure">Aventure</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/strategie">Stratégie</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/strategie">Football</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/strategie">Basketball</ListGroupItem>



          {/* Filtre par Popularité */}
          <ListGroupItem className="filter-title">Popularité</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/populaires">Les plus populaires</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/recents">Nouveautés</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/tendances">Tendances</ListGroupItem>
          
          {/* Filtre par Note */}
          <ListGroupItem className="filter-title">Note</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/top-rated">Top noté</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/bons-jeux">Bons jeux</ListGroupItem>
        </ListGroup>
      </Collapse>
    </div>
  );
};

export default Sidebar;
