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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
    };
    loadGames();
  }, []);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div>
      <MainNavbar toggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row>
          <Col md="3">
            {!isSidebarVisible && (
              <Sidebar isMobile={isSidebarVisible} toggleSidebar={toggleSidebar} />
            )}
          </Col>
          <Col md="9">
            <Home games={games} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
