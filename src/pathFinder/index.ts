import { TItem } from "../types";
import { findNextCharacter } from "./findNextCharacter";

export const pathFinder = (item: TItem) => {
  const nextitem = findNextCharacter(item);

  if (nextitem) {
    pathFinder(nextitem);
  }
};
