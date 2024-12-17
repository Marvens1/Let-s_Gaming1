// Sidebar.js - Sidebar pou filtè ak navigasyon

import React, { useState } from "react";
import { ListGroup, ListGroupItem, Collapse, Button } from "reactstrap";
import "./Sidebar.css";

const Sidebar = ({ isMobile, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isMobile ? "show" : ""}`}>
      <h5 className="sidebar-title">Filtres de Jeux</h5>

      {/* Bouton pou ouvri/fèmen filtè yo */}
      <Button color="primary" onClick={toggleCollapse} className="toggle-button">
        {isOpen ? "Cacher les filtres" : "Afficher les filtres"}
      </Button>

      <Collapse isOpen={isOpen}>
        <ListGroup className="filter-group">
          {/* Filtre pa kategori */}
          <ListGroupItem className="filter-title">Catégories</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/action">Action</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/aventure">Aventure</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/strategie">Stratégie</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/football">Football</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/basketball">Basketball</ListGroupItem>

          {/* Filtre pa popilarite */}
          <ListGroupItem className="filter-title">Popularité</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/populaires">Les plus populaires</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/recents">Nouveautés</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/tendances">Tendances</ListGroupItem>

          {/* Filtre pa nòt */}
          <ListGroupItem className="filter-title">Note</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/top-rated">Top noté</ListGroupItem>
          <ListGroupItem tag="a" href="/categories/bons-jeux">Bons jeux</ListGroupItem>
        </ListGroup>
      </Collapse>
    </div>
  );
};

export default Sidebar;
