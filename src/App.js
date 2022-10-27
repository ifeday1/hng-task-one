import './App.css';
import React from "react";
import Main from "./pages/Main";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Profile />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
