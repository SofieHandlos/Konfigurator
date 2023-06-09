import React, { useState } from "react";
import DesignChoice from "./DesignChoice";
import SizeChoice from "./SizeChoice";
import SinkChoice from "./SinkChoice";
import DoorsDrawersChoice from "./DoorsDrawersChoice";
import HandelesChoice from "./HandlesChoice";
import ArmatureChoice from "./ArmatureChoice";
import AccessoriesChoice from "./AccessoriesChoice";

// Her eksporteres funktionen "HomePage", som er det primære komponent
export default function HomePage() {
  // Her oprettes forskellige hooks vha. "useState" til at styre aktive valg og tilstanden for "collapsed" knappen
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("choice-active");
  const [activetwo, setActiveTwo] = useState("choice");
  const [activethree, setActiveThree] = useState("choice");
  const [activefour, setActiveFour] = useState("choice");
  const [activefive, setActiveFive] = useState("choice");
  const [activesix, setActiveSix] = useState("choice");
  const [activeseven, setActiveSeven] = useState("choice");

  // Denne funktion inverterer værdien af "collapsed" hver gang knappen klikkes på
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  // Her er der en række funktioner, som håndterer klik på hvert enkelt valg i navigationen
  // Hver funktion opdaterer "active" state og de resterende valg states til deres oprindelige tilstand
  const handleActiveChoice = () => {
    setActive("choice-active");
    setActiveTwo("choice");
    setActiveThree("choice");
    setActiveFour("choice");
    setActiveFive("choice");
    setActiveSix("choice");
    setActiveSeven("choice");
  };

  const handleActiveChoiceTwo = () => {
    setActive("choice");
    setActiveTwo("choice-active");
    setActiveThree("choice");
    setActiveFour("choice");
    setActiveFive("choice");
    setActiveSix("choice");
    setActiveSeven("choice");
  };

  const handleActiveChoiceThree = () => {
    setActive("choice");
    setActiveTwo("choice");
    setActiveThree("choice-active");
    setActiveFour("choice");
    setActiveFive("choice");
    setActiveSix("choice");
    setActiveSeven("choice");
  };

  const handleActiveChoiceFour = () => {
    setActive("choice");
    setActiveTwo("choice");
    setActiveThree("choice");
    setActiveFour("choice-active");
    setActiveFive("choice");
    setActiveSix("choice");
    setActiveSeven("choice");
  };

  const handleActiveChoiceFive = () => {
    setActive("choice");
    setActiveTwo("choice");
    setActiveThree("choice");
    setActiveFour("choice");
    setActiveFive("choice-active");
    setActiveSix("choice");
    setActiveSeven("choice");
  };

  const handleActiveChoiceSix = () => {
    setActive("choice");
    setActiveTwo("choice");
    setActiveThree("choice");
    setActiveFour("choice");
    setActiveFive("choice");
    setActiveSix("choice-active");
    setActiveSeven("choice");
  };

  const handleActiveChoiceSeven = () => {
    setActive("choice");
    setActiveTwo("choice");
    setActiveThree("choice");
    setActiveFour("choice");
    setActiveFive("choice");
    setActiveSix("choice");
    setActiveSeven("choice-active");
  };

  // Her returneres HTML for vores komponent
  // Det første div-element opdateres med "collapsed" class afhængigt
  return (
    <>
      <main className={`tabbar ${collapsed ? "collapsed" : ""}`}>
        <div className="horizontal-scroll-line" onClick={handleToggle}></div>
        <nav className="nav">
          <div className="navigationbar">
            <h1 className={active} onClick={handleActiveChoice}>
              Design
            </h1>
            <h1 className={activetwo} onClick={handleActiveChoiceTwo}>
              Størrelse
            </h1>
            <h1 className={activethree} onClick={handleActiveChoiceThree}>
              Skuffer/låger
            </h1>
            <h1 className={activefour} onClick={handleActiveChoiceFour}>
              Greb
            </h1>
            <h1 className={activefive} onClick={handleActiveChoiceFive}>
              Vask
            </h1>
            <h1 className={activesix} onClick={handleActiveChoiceSix}>
              Armatur
            </h1>
            <h1 className={activeseven} onClick={handleActiveChoiceSeven}>
              Tilbehør
            </h1>
          </div>
          <div className="next-previous-buttons">
            <h3 className="previous-button">Forrige</h3>
            <h3 className="next-button">Næste</h3>
          </div>
        </nav>

        {/* Viser DesignChoice komponenten hvis active er "choice-active" */}
        {active === "choice-active" && <DesignChoice />}
        {activetwo === "choice-active" && <SizeChoice />}
        {activethree === "choice-active" && <DoorsDrawersChoice />}
        {activefour === "choice-active" && <HandelesChoice />}
        {activefive === "choice-active" && <SinkChoice />}
        {activesix === "choice-active" && <ArmatureChoice />}
        {activeseven === "choice-active" && <AccessoriesChoice />}
      </main>
    </>
  );
}
