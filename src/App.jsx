import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import WebElements from "./Components/WebElements";
import Tools from "./Components/Tools";
import Concepts from "./Components/Concepts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <Hero />
      <WebElements />
      <Tools />
      <Concepts />
      <Footer />
    </div>
  );
}

export default App;
