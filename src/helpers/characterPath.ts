import { TItem } from "../types";

export let characterPath = "";

export const setCharacterPath = (item: TItem) => {
  characterPath = characterPath + item.character;
};

export const getCharacterPath = () => {
  return characterPath;
};
