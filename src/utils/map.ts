export let map: string[][] = [];

export const parseMap = (mapVariant: string) => {
  map = mapVariant.split("\n").map((string) => string.split(""));
};

const getMap = () => {
  if (!map.length) {
    throw Error("Map is not parsed as 2d array");
  }

  return map;
};

export { getMap };
