import React from 'react';
import './App.css';
import { Col } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Dropdown from "./container/common/Dropdown"

function App() {
  return (
    <div className="App">
      <Col style={{
        padding: 0, top: 0, width: '100%', position: "fixed", zIndex: 99
      }}>
        <Header />
      </Col>
      <Col style={{ padding: 0 }} >
        <Content />
      </Col>
      <Col style={{ padding: 0, overflow: 'hidden' }}>
        <Footer />
      </Col>
    </div >
  );
}

export default App;
