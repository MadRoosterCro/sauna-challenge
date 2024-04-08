import { TItem } from "../types";
import { findNextCharacter } from "./findNextCharacter";

export const pathFinder = (element: TItem) => {
  const nextElement = findNextCharacter(element);

  if (nextElement) {
    pathFinder(nextElement);
  }
};
