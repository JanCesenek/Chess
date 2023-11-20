import React from "react";
import { useSelector } from "react-redux";
import ChessPiece from "./components/chessPiece";

function App() {
  const whitePieces = useSelector((state) => state.player.white);
  const blackPieces = useSelector((state) => state.player.black);
  const playerTurn = useSelector((state) => state.player.playerTurn);
  const activeGame = useSelector((state) => state.player.activeGame);

  const fieldArray = [
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
    [8, 7],
    [8, 8],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [7, 8],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 7],
    [6, 8],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [4, 8],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [3, 8],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* CHESSBOARD */}
      <div
        className={`grid grid-cols-8 grid-rows-[repeat(8,minmax(0,1fr))] w-[50rem] h-[50rem] border-4 border-black ${
          !activeGame && "opacity-70 pointer-events-none"
        }`}>
        {fieldArray.map((el, i) => {
          if ((el[0] % 2 === 0 && i % 2 === 1) || (el[0] % 2 === 1 && i % 2 === 0))
            return (
              <div
                key={i}
                className={`flex bg-stone-700 row-start-[${9 - el[0]}] row-end-[${
                  10 - el[0]
                }] col-start-[${el[1]}] col-end-[${el[1] + 1}]`}></div>
            );
          else
            return (
              <div
                key={i}
                className={`flex bg-slate-300 row-start-[${9 - el[0]}] row-end-[${
                  10 - el[0]
                }] col-start-[${el[1]}] col-end-[${el[1] + 1}]`}></div>
            );
        })}
        {whitePieces.map((el, i) => {
          if (i < 8) {
            return (
              <ChessPiece key={i} color="white" type="pawn" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 8 || i === 9) {
            return (
              <ChessPiece key={i} color="white" type="knight" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 10 || i === 11) {
            return (
              <ChessPiece key={i} color="white" type="bishop" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 12 || i === 13) {
            return (
              <ChessPiece key={i} color="white" type="rook" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 14) {
            return (
              <ChessPiece key={i} color="white" type="queen" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else {
            return (
              <ChessPiece key={i} color="white" type="king" firstCoo={el[0]} secondCoo={el[1]} />
            );
          }
        })}
        {blackPieces.map((el, i) => {
          if (i < 8) {
            return (
              <ChessPiece key={i} color="black" type="pawn" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 8 || i === 9) {
            return (
              <ChessPiece key={i} color="black" type="knight" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 10 || i === 11) {
            return (
              <ChessPiece key={i} color="black" type="bishop" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 12 || i === 13) {
            return (
              <ChessPiece key={i} color="black" type="rook" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else if (i === 14) {
            return (
              <ChessPiece key={i} color="black" type="queen" firstCoo={el[0]} secondCoo={el[1]} />
            );
          } else {
            return (
              <ChessPiece key={i} color="black" type="king" firstCoo={el[0]} secondCoo={el[1]} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
