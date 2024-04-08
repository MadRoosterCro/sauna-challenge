import { TItem } from "../types";

export let characterPath = "";

export const setCharacterPath = (element: TItem) => {
  characterPath = characterPath + element.character;
};

export const getCharacterPath = () => {
  return characterPath;
};
