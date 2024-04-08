import { POSSIBLE_CHARACTERS } from "../../constants";

export const findStartingPosition = (map: string[][]): Element | {} => {
  let numberOfStartCharacter = 0;
  let numberOfEndCharacter = 0;
  let firstElement = {};

  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      if (map[row][column] === POSSIBLE_CHARACTERS.START) {
        numberOfStartCharacter++;

        if (numberOfStartCharacter > 1) {
          throw new Error("No multiple starts!");
        }

        firstElement = {
          position: { row, column },
          character: map[row][column],
          direction: null,
        };
      }

      if (map[row][column] === POSSIBLE_CHARACTERS.END) {
        numberOfEndCharacter++;
      }
    }
  }

  if (!numberOfStartCharacter) {
    throw new Error("Missing start character!");
  }

  if (!numberOfEndCharacter) {
    throw new Error("Missing end character!");
  }

  return firstElement;
};
