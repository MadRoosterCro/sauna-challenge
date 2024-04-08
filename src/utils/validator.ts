import { POSSIBLE_CHARACTERS, regex, TPossibleCharacters } from "../constants";
import { TItem, TPosition } from "../types";
import { getMap } from "../utils/map";
import { getPosition, setPosition } from "../utils/trackPositionDuplication";

export const isValidNextPosition = (position: TPosition) => {
  const map = getMap();

  const doesRowExists = Boolean(map[position.row]);

  if (!doesRowExists) {
    return false;
  }

  const doesRowAndColumnExist = Boolean(map[position.row][position.column]);

  const isUpperCaseCharacter =
    doesRowAndColumnExist && regex.test(map[position.row][position.column]);

  if (isUpperCaseCharacter) {
    if (!getPosition(position.row, position.column)) {
      setPosition(
        position.row,
        position.column,
        map[position.row][position.column]
      );
    }
  }

  const isPathCharacter =
    Object.values(POSSIBLE_CHARACTERS).includes(
      map[position.row][position.column] as TPossibleCharacters
    ) || isUpperCaseCharacter;

  return doesRowAndColumnExist && isPathCharacter;
};

export const validateSpecialCasesForCharacter = (
  character: TPossibleCharacters,
  nextPossibleElement: TItem[]
) => {
  if (character === POSSIBLE_CHARACTERS.TURN) {
    if (nextPossibleElement.length === 0) {
      throw new Error("Fake turn!");
    }

    if (nextPossibleElement.length > 1) {
      throw new Error("No fork in the path!");
    }
  }

  if (
    character === POSSIBLE_CHARACTERS.START &&
    nextPossibleElement.length > 1
  ) {
    throw new Error("No multiple starting paths!");
  }

  if (character !== POSSIBLE_CHARACTERS.END && !nextPossibleElement.length) {
    throw new Error("Broken path!");
  }
};
