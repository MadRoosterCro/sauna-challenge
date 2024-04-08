import {
  concatenateMapPositionValues,
  getPosition,
  positionMap,
  setPosition,
} from "./trackPositionDuplication";
import { isValidNextPosition } from "./validator";
import * as mapModule from "./map";

describe("setPosition", () => {
  beforeEach(() => {
    positionMap.clear();
  });

  it("should set the position correctly", () => {
    setPosition(0, 0, "A");

    expect(getPosition(0, 0)).toEqual("A");
  });
});

describe("getPosition", () => {
  beforeEach(() => {
    positionMap.clear();
  });

  it("should return the value of the position", () => {
    setPosition(1, 1, "B");

    expect(getPosition(1, 1)).toEqual("B");
  });

  it("should return undefined if position is not set", () => {
    expect(getPosition(2, 2)).toBeUndefined();
  });
});

describe("concatenateMapPositionValues", () => {
  it("should concatenate map position values correctly", () => {
    setPosition(0, 0, "A");
    setPosition(0, 1, "B");
    setPosition(1, 0, "C");

    expect(concatenateMapPositionValues()).toEqual("ABC");
  });
});

describe("isValidNextPosition", () => {
  const spyGetMap = jest.spyOn(mapModule, "getMap");
  spyGetMap.mockReturnValue([
    [" ", " ", " ", " ", " ", " ", " ", " ", "x", "-", "B", "\r"],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\r"],
    [" ", " ", " ", "@", "-", "-", "A", "-", "-", "-", "+", "\r"],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\r"],
    [" ", " ", " ", " ", " ", "x", "+", " ", " ", " ", "C", "\r"],
    [" ", " ", " ", " ", " ", " ", "|", " ", " ", " ", "|", "\r"],
    [" ", " ", " ", " ", " ", " ", "+", "-", "-", "-", "+", "\r"],
  ]);

  it("should return true for a valid path character", () => {
    const position = { row: 2, column: 3 };
    expect(isValidNextPosition(position)).toBe(true);
  });

  it("should return false for an invalid path character", () => {
    const position = { row: 0, column: 0 };
    expect(isValidNextPosition(position)).toBe(false);
  });

  it("should return true for uppercase latter", () => {
    const position = { row: 3, column: 6 };
    expect(isValidNextPosition(position)).toBe(false);
  });
});
