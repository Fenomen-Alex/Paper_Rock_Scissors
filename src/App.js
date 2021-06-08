import React, {useEffect, useState} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import Info from "./components/Info";
import GameState from "./components/GameState";
import Choices from "./components/Choices";

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesTo: 1 }
];

export default function App() {

  const [ wins, setWins ] = useState(0);
  const [ losses, setLosses ] = useState(0);
  const [ userChoice, setUserChoice ] = useState(null);
  const [ computerChoice, setComputerChoice ] = useState(null);
  const [ gameState, setGameState ] = useState(null); // win, lose, draw

  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find( c => c.id === choice);
    setUserChoice(chosenChoice);

    // determine the winner
    if (chosenChoice.losesTo === computerChoice.id) {
      setLosses(losses => losses + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === chosenChoice.id) {
      setWins(wins => wins + 1);
      setGameState('win');
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState('draw');
    }
  };

  const renderComponent = (choice) => {
    const Component = choice.component;
    return <Component />
  };

  return (
    <div className="app">
      {/* information goes here */}
      <Info wins={wins} losses={losses} />
      {/* the popup to show win/lose/draw */}
      <GameState gameState={gameState}
                 renderComponent={renderComponent}
                 computerChoice={computerChoice}
                 restartGame={restartGame}
                 userChoice={userChoice}
      />
      <Choices handleUserChoice={handleUserChoice} />
    </div>
  );
}
