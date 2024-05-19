import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Introducao from "./Components/Introducao";
import Footer from "./Components/Footer";
import SobreNos from "./Components/SobreNos";
import Eventos from "./Components/Eventos";
import Equipe from "./Components/Equipe";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-color">
      <Header />
      <Introducao />
      <SobreNos />
      <Eventos />
      <Equipe />
      <Footer />
    </div>
  );
}

export default App;
