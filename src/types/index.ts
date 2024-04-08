import { TDirection, TPossibleCharacters } from "../constants";

export type TPosition = {
  row: number;
  column: number;
};

export type TItem = {
  character: TPossibleCharacters;
  position: TPosition;
  previousDirection: TDirection;
};
