import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import WebElements from "./Components/WebElements";
import Technologies from "./Components/Technologies";
import JackOfAllTrades from "./Components/JackOfAllTrades";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WebElements />
      <Technologies />
      <JackOfAllTrades />
      <Footer />
    </div>
  );
}

export default App;
