export const positionMap = new Map();

export const setPosition = (x: number, y: number, value: string) => {
  const key = `${x},${y}`;

  positionMap.set(key, value);
};

export const getPosition = (x: number, y: number) => {
  const key = `${x},${y}`;

  return positionMap.get(key);
};

export const concatenateMapPositionValues = () => {
  let concatenatedString = "";

  for (const value of positionMap.values()) {
    concatenatedString += value;
  }

  return concatenatedString;
};
