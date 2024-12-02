import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MainNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.css";
import { fetchGames } from "./components/services/gameServices";
import Footer from "./Footer";

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
    };
    loadGames();
  }, []);

  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <Row>
          <Col md="3">
            <Sidebar />
          </Col>
          <Col md="9">
            <Home games={games} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default App;
