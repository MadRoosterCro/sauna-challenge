import { findNextPosition } from ".";
import { DIRECTION, POSSIBLE_CHARACTERS } from "../../constants";

jest.mock("../../helpers/map", () => ({
  getMap: jest.fn(() => [
    ["@", "-", "A", "-", "+"],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", "D"],
    [" ", " ", "x", "-", "+"],
  ]),
}));

describe("findNextPosition", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the next position for direction right", () => {
    const item = {
      position: { row: 0, column: 2 },
      previousDirection: DIRECTION.RIGHT,
    };

    const result = findNextPosition(item.previousDirection, item.position);

    expect(result).toEqual({
      position: { row: 0, column: 3 },
      character: POSSIBLE_CHARACTERS.DASH, // Replace with expected character
      previousDirection: item.previousDirection,
    });
  });

  it("should return the next position for direction left", () => {
    const item = {
      position: { row: 0, column: 2 },
      previousDirection: DIRECTION.LEFT,
    };

    const result = findNextPosition(item.previousDirection, item.position);

    expect(result).toEqual({
      position: { row: 0, column: 1 },
      character: POSSIBLE_CHARACTERS.DASH, // Replace with expected character
      previousDirection: item.previousDirection,
    });
  });

  it("should return the next position for direction up", () => {
    const item = {
      position: { row: 2, column: 4 },
      previousDirection: DIRECTION.UP,
    };

    const result = findNextPosition(item.previousDirection, item.position);

    expect(result).toEqual({
      position: { row: 1, column: 4 },
      character: "|",
      previousDirection: item.previousDirection,
    });
  });

  it("should return the next position for direction down", () => {
    const item = {
      position: { row: 1, column: 4 },
      previousDirection: DIRECTION.DOWN,
    };

    const result = findNextPosition(item.previousDirection, item.position);

    expect(result).toEqual({
      position: { row: 2, column: 4 },
      character: "D",
      previousDirection: item.previousDirection,
    });
  });

  it("should return null for invalid next position", () => {
    const possibleDirection = DIRECTION.RIGHT;

    const result = findNextPosition(possibleDirection, {
      row: 0,
      column: 100,
    });

    expect(result).toBeNull();
  });

  it("should return null for next position out of map bounds", () => {
    const possibleDirection = DIRECTION.UP;

    const result = findNextPosition(possibleDirection, {
      row: 0,
      column: 2,
    });

    expect(result).toBeNull();
  });
});
