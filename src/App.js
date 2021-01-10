import React, { useRef } from "react";
import Header from "./Header";
import Game from "./Game";
import Instructions from "./Instructions";
import Footer from "./Footer";
import "./App.css";

function App() {
  const gameSectionRef = useRef(null);
  const instructionSectionRef = useRef(null);

  const scrollToGameSection = () => gameSectionRef.current.scrollIntoView();
  const scrollToInstructionSection = () =>
    instructionSectionRef.current.scrollIntoView();

  return (
    <React.StrictMode>
      <Header
        gameSectionScroll={scrollToGameSection}
        instructionSectionScroll={scrollToInstructionSection}
      />
      <Instructions instructionSectionRef={instructionSectionRef} />
      <Game gameSectionRef={gameSectionRef} />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
