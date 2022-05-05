import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
