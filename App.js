import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameBoard from './view/GameBoard';

export default function App() {
  const [gameState, setGameState] = useState(new Array(9).fill(null));
  const [curPlayer, setCurPlayer] = useState('X');
  useEffect(() => {
    checkWinner('X') && console.log('Congrats! X wins!');
    checkWinner('O') && console.log('Congrats! O wins!')
  }, [gameState]);
  function checkWinner(sign) {
    if (
      gameState[0] === sign && gameState[1] === sign && gameState[2] === sign ||
      gameState[3] === sign && gameState[4] === sign && gameState[5] === sign ||
      gameState[6] === sign && gameState[7] === sign && gameState[8] === sign ||
      gameState[0] === sign && gameState[4] === sign && gameState[8] === sign ||
      gameState[2] === sign && gameState[4] === sign && gameState[6] === sign
    ) { return true }
    else { return false }
  }
  function addSign(index) {
    if (gameState[index] !== null) {
      console.log(`You cannot place ${curPlayer} here!`);
      return;
    }
    const newGameState = [...gameState];
    newGameState[index] = curPlayer;
    setGameState(newGameState);
    curPlayer === 'X' ? setCurPlayer('O') : setCurPlayer('X');
  }
  return (
    <GameBoard gameState={gameState} pressHandler={addSign}/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
