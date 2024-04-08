import { findCharacterDirection } from "../findCharacterDirection";
import { findNextPosition } from "../findNextPosition";
import { TItem } from "../../types";
import { setCharacterPath } from "../../utils/characterPath";
import { validateSpecialCasesForCharacter } from "../../utils/validator";

export const findNextCharacter = (element: TItem) => {
  const { previousDirection, character } = element;

  const { directions } = findCharacterDirection({
    direction: previousDirection,
    character,
  });

  setCharacterPath(element);

  let nextPossibleElement: TItem[] = [];

  directions.forEach((possibleNextPosition) => {
    const nextPosition = findNextPosition(
      possibleNextPosition,
      element.position
    );

    if (nextPosition) {
      nextPossibleElement = [...nextPossibleElement, nextPosition];
    }
  });

  validateSpecialCasesForCharacter(character, nextPossibleElement);

  return nextPossibleElement[0];
};
