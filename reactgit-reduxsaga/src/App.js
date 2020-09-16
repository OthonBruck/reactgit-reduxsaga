import React, { Component } from "react";
import Pesquisa from "./components/pesquisa";
import "./pesquisa.css";
import Lista from "./components/lista";

import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pesquisa />
        <Lista />
      </div>
    );
  }
}

export default App;
