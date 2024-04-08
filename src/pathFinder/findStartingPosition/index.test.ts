import { findStartingPosition } from ".";
import { POSSIBLE_CHARACTERS } from "../../constants";

describe("findStartingPosition", () => {
  it("should find the position of the starting character in a valid map", () => {
    const map = [
      ["@", "-", "A", "-", "+"],
      [" ", " ", " ", " ", "|"],
      [" ", " ", " ", " ", "D"],
      [" ", " ", "x", "-", "+"],
    ];

    const result = findStartingPosition(map);

    expect(result).toEqual({
      position: { row: 0, column: 0 },
      character: POSSIBLE_CHARACTERS.START,
      direction: null,
    });
  });

  it("should throw an error if there are multiple start characters", () => {
    const map = [
      ["@", "-", "A", "-", "+"],
      ["|", " ", " ", " ", "|"],
      ["@", " ", " ", " ", "D"],
      [" ", " ", "x", "-", "+"],
    ];

    expect(() => {
      findStartingPosition(map);
    }).toThrow("No multiple starts!");
  });

  it("should throw an error if there is no start character", () => {
    const map = [
      ["A", "-", "+"],
      [" ", " ", "|"],
      [" ", " ", "D"],
      ["x", "-", "+"],
    ];

    expect(() => {
      findStartingPosition(map);
    }).toThrow("Missing start character!");
  });

  it("should throw an error if there is no end character", () => {
    const map = [
      ["A", "-", "+"],
      ["|", " ", "|"],
      ["@", " ", "D"],
      [" ", "-", "+"],
    ];

    expect(() => {
      findStartingPosition(map);
    }).toThrow("Missing end character!");
  });

  it("should throw an error if both start and end characters are missing", () => {
    const map = [
      ["A", "-", "+"],
      ["|", " ", "|"],
      [" ", " ", " "],
      ["x", "-", "+"],
    ];

    expect(() => {
      findStartingPosition(map);
    }).toThrow("Missing start character!");
  });
});
