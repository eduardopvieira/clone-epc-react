import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Intro from "./Components/Introducao/Introducao";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-color">
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
