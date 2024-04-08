import {
  allDirections,
  TDirection,
  POSSIBLE_CHARACTERS,
} from "../../constants";
import { TItem } from "../../types";
import { changeDirections } from "../changeDirection";

export const findCharacterDirection = ({
  direction,
  character,
}: Pick<TItem, "character"> & {
  direction?: TDirection;
}): Pick<TItem, "character"> & { directions: TDirection[] } => {
  switch (character) {
    case POSSIBLE_CHARACTERS.START:
      return {
        directions: allDirections,
        character,
      };

    case POSSIBLE_CHARACTERS.DASH:
    case POSSIBLE_CHARACTERS.PIPE:
      return {
        directions: direction ? [direction] : [],
        character,
      };

    case POSSIBLE_CHARACTERS.TURN:
      if (direction) {
        return {
          directions: changeDirections({ previousDirection: direction }),
          character,
        };
      }
      return {
        directions: [],
        character,
      };

    case POSSIBLE_CHARACTERS.END:
      return { directions: [], character };

    default:
      if (direction) {
        const upperCaseLetterPossibleDirections = changeDirections({
          previousDirection: direction,
        });

        return {
          directions: [direction, ...upperCaseLetterPossibleDirections],
          character,
        };
      }
      return {
        directions: [],
        character,
      };
  }
};
