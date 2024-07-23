import React, { useEffect } from 'react';
import './Home.css';

import GameContextProvider from '../contexts/GameContext';
import Board from '../components/Board';

export default function Home() {
  useEffect(() => {
    document.title = 'tic tac toe React';
  }, []);

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
