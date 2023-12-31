import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    white: [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
      [2, 8],
      [1, 2],
      [1, 7],
      [1, 3],
      [1, 6],
      [1, 1],
      [1, 8],
      [1, 4],
      [1, 5],
    ],
    black: [
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      [7, 7],
      [7, 8],
      [8, 2],
      [8, 7],
      [8, 3],
      [8, 6],
      [8, 1],
      [8, 8],
      [8, 4],
      [8, 5],
    ],
    playerTurn: 0,
    activeGame: false,
  },
  reducers: {
    resetGame(state) {
      state.white = [
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [2, 7],
        [2, 8],
        [1, 2],
        [1, 7],
        [1, 3],
        [1, 6],
        [1, 1],
        [1, 8],
        [1, 4],
        [1, 5],
      ];
      state.black = [
        [7, 1],
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
        [7, 7],
        [7, 8],
        [8, 2],
        [8, 7],
        [8, 3],
        [8, 6],
        [8, 1],
        [8, 8],
        [8, 4],
        [8, 5],
      ];
      state.activeGame = false;
    },
    changeTurns(state) {
      state.playerTurn = (state.playerTurn + 1) % 2;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
