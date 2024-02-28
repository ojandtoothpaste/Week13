import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import Navbar, {navbar} from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
      <Login />
      </main>
    </div>
  )
}

export default App;