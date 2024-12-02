import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './MainNavbar.css';

const MainNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar color="dark" dark expand="md" className="main-navbar">
      <NavbarBrand href="/" className="navbar-brand">
        <i className="fas fa-gamepad"></i> Let's Gaming
      </NavbarBrand>

      {/* Barre de recherche */}
      <Input
        type="search"
        placeholder="Rechercher un jeu..."
        className="search-input ml-3 mr-3"
      />

      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/favorites">
            <i className="fas fa-heart"></i> Favoris
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/categories">
            <i className="fas fa-th-large"></i> Catégories
          </NavLink>
        </NavItem>

        {/* Icône de "like" */}
        <NavItem>
          <NavLink href="/liked">
            <i className="fas fa-thumbs-up"></i> J'aime
          </NavLink>
        </NavItem>

        {/* Menu déroulant du profil utilisateur */}
        <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle nav caret>
            <i className="fas fa-user-circle"></i> Profil
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="/profile">Mon Profil</DropdownItem>
            <DropdownItem href="/settings">Paramètres</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/logout">Déconnexion</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default MainNavbar;
