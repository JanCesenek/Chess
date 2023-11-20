import React from "react";
import {
  GiChessPawn,
  GiChessKnight,
  GiChessBishop,
  GiChessRook,
  GiChessQueen,
  GiChessKing,
} from "react-icons/gi";

const ChessPiece = ({ color, type, firstCoo, secondCoo }) => {
  return (
    <div
      className={`row-start-[${9 - firstCoo}] row-end-[${
        10 - firstCoo
      }] col-start-[${secondCoo}] col-end-[${secondCoo + 1}] flex justify-center items-center ${
        color === "white" ? "text-yellow-200" : "text-slate-800"
      }`}>
      {type === "pawn" && <GiChessPawn className="w-20 h-20" />}
      {type === "knight" && <GiChessKnight className="w-20 h-20" />}
      {type === "bishop" && <GiChessBishop className="w-20 h-20" />}
      {type === "rook" && <GiChessRook className="w-20 h-20" />}
      {type === "queen" && <GiChessQueen className="w-20 h-20" />}
      {type === "king" && <GiChessKing className="w-20 h-20" />}
    </div>
  );
};

export default ChessPiece;
