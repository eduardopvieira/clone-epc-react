import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Intro from "./Components/Introducao/Introducao";
import Footer from "./Components/Footer/Footer";
import SobreNos from "./Components/SobreNos/SobreNos";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-color">
      <Header />
      <Intro />
      <SobreNos />
      <Footer />
    </div>
  );
}

export default App;
