import { findCharacterDirection } from "../findCharacterDirection";
import { findNextPosition } from "../findNextPosition";
import { TItem } from "../../types";
import { setCharacterPath } from "../../helpers/characterPath";
import { validateSpecialCasesForCharacter } from "../../helpers/validator";

export const findNextCharacter = (item: TItem) => {
  const { previousDirection, character } = item;

  const { directions } = findCharacterDirection({
    direction: previousDirection,
    character,
  });

  setCharacterPath(item);

  let nextPossibleitem: TItem[] = [];

  directions.forEach((possibleNextPosition) => {
    const nextPosition = findNextPosition(possibleNextPosition, item.position);

    if (nextPosition) {
      nextPossibleitem = [...nextPossibleitem, nextPosition];
    }
  });

  validateSpecialCasesForCharacter(character, nextPossibleitem);

  return nextPossibleitem[0];
};
