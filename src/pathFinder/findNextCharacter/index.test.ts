import { findNextCharacter } from ".";
import { DIRECTION, POSSIBLE_CHARACTERS, TDirection } from "../../constants";
import * as mapModule from "../../helpers/map";

jest.mock("../../helpers/trackPositionDuplication", () => ({
  getPosition: jest.fn(),
  setPosition: jest.fn(),
}));

jest.mock("../../helpers/characterPath", () => ({
  setCharacterPath: jest.fn(),
}));

describe("findNextCharacter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should find next position for given item", () => {
    const spyGetMap = jest.spyOn(mapModule, "getMap");
    spyGetMap.mockReturnValue([
      ["@", "-", "A", "-", "+"],
      [" ", " ", " ", " ", "|"],
      [" ", " ", " ", " ", "D"],
      [" ", " ", "x", "-", "+"],
    ]);

    const item = {
      previousDirection: DIRECTION.RIGHT as TDirection,
      character: POSSIBLE_CHARACTERS.DASH,
      position: { row: 0, column: 2 },
    };

    const result = findNextCharacter(item);

    expect(result).toEqual({
      position: { row: 0, column: 3 },
      character: POSSIBLE_CHARACTERS.DASH,
      previousDirection: item.previousDirection,
    });
  });

  it("should return null if there is no directions", () => {
    const spyGetMap = jest.spyOn(mapModule, "getMap");
    spyGetMap.mockReturnValue([
      ["@", "-", "A", "-", "+"],
      [" ", " ", " ", " ", "|"],
      [" ", " ", " ", " ", "D"],
      [" ", " ", "x", "-", "+"],
    ]);

    const item = {
      previousDirection: DIRECTION.RIGHT as TDirection,
      character: POSSIBLE_CHARACTERS.DASH,
      position: { row: 0, column: 2 },
    };

    const result = findNextCharacter(item);

    expect(result).toEqual({
      position: { row: 0, column: 3 },
      character: POSSIBLE_CHARACTERS.DASH,
      previousDirection: item.previousDirection,
    });
  });

  it("should throw an error for 'TURN' character for fake turn", () => {
    const spyGetMap = jest.spyOn(mapModule, "getMap");
    spyGetMap.mockReturnValue([
      [" ", " ", "@", "-", "A", "-", "+", "-", "B", "-", "x", "\r"],
    ]);

    const item = {
      previousDirection: DIRECTION.RIGHT as TDirection,
      character: POSSIBLE_CHARACTERS.TURN,
      position: { row: 0, column: 2 },
    };

    expect(() => {
      findNextCharacter(item);
    }).toThrow("Fake turn!");
  });

  it("should throw an error for no multiple start paths", () => {
    const spyGetMap = jest.spyOn(mapModule, "getMap");
    spyGetMap.mockReturnValue([
      [" ", " ", "x", "-", "B", "-", "@", "-", "A", "-", "x", "\r"],
    ]);

    const item = {
      previousDirection: DIRECTION.RIGHT as TDirection,
      character: POSSIBLE_CHARACTERS.START,
      position: { row: 0, column: 6 },
    };

    expect(() => {
      findNextCharacter(item);
    }).toThrow("No multiple starting paths!");
  });

  it("should throw an error for broken path", () => {
    const spyGetMap = jest.spyOn(mapModule, "getMap");
    spyGetMap.mockReturnValue([
      [" ", " ", " ", "@", "-", "-", "A", "-", "+", "\r"],
      [" ", " ", " ", " ", " ", " ", " ", " ", "|", "\r"],
      ["\r"],
      [" ", " ", " ", " ", " ", " ", " ", " ", "B", "-", "x", "\r"],
    ]);

    const item = {
      previousDirection: DIRECTION.DOWN as TDirection,
      character: POSSIBLE_CHARACTERS.PIPE,
      position: { row: 1, column: 8 },
    };

    expect(() => {
      findNextCharacter(item);
    }).toThrow("Broken path!");
  });

  it("should throw an error for no fork in the path", () => {
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

    const item = {
      previousDirection: DIRECTION.RIGHT as TDirection,
      character: POSSIBLE_CHARACTERS.TURN,
      position: { row: 2, column: 10 },
    };

    expect(() => {
      findNextCharacter(item);
    }).toThrow("No fork in the path!");
  });
});
