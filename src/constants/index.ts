export const DIRECTION = {
  RIGHT: "right",
  LEFT: "left",
  UP: "up",
  DOWN: "down",
} as const;

export type TDirection = (typeof DIRECTION)[keyof typeof DIRECTION];

export const POSSIBLE_CHARACTERS = {
  DASH: "-",
  PIPE: "|",
  TURN: "+",
  START: "@",
  END: "x",
} as const;

export type TPossibleCharacters =
  (typeof POSSIBLE_CHARACTERS)[keyof typeof POSSIBLE_CHARACTERS];

export const allDirections = [
  DIRECTION.RIGHT,
  DIRECTION.LEFT,
  DIRECTION.UP,
  DIRECTION.DOWN,
];

export const regex = /[A-Z]/;
