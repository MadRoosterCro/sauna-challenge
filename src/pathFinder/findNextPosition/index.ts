import { TDirection, TPossibleCharacters } from "../../constants";
import { TItem, TPosition } from "../../types";
import { getMap } from "../../helpers/map";
import { isValidNextPosition } from "../../helpers/validator";

export const findNextPosition = (
  possibleDirection: TDirection,
  position: TPosition
): TItem | null => {
  const { row, column } = position;
  const map = getMap();

  const possiblePositions = {
    right: { row, column: column + 1 },
    left: { row, column: column - 1 },
    up: {
      row: row - 1,
      column,
    },
    down: {
      row: row + 1,
      column,
    },
  };

  if (!isValidNextPosition(possiblePositions[possibleDirection])) {
    return null;
  }

  const { row: newRowPosition, column: newColumnPosition } =
    possiblePositions[possibleDirection];

  return {
    position: possiblePositions[possibleDirection],
    character: map[newRowPosition][newColumnPosition] as TPossibleCharacters,
    previousDirection: possibleDirection,
  };
};
