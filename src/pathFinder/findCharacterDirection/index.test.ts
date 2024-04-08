import { findCharacterDirection } from ".";
import { DIRECTION, POSSIBLE_CHARACTERS, allDirections } from "../../constants";

describe("Test findCharacterDirection function", () => {
  it("should return all directions for START character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.START,
    });
    expect(result).toEqual({
      directions: allDirections,
      character: POSSIBLE_CHARACTERS.START,
    });
  });

  it("should return specified direction for DASH character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.DASH,
      direction: DIRECTION.UP,
    });
    expect(result).toEqual({
      directions: [DIRECTION.UP],
      character: POSSIBLE_CHARACTERS.DASH,
    });
  });

  it("should return specified direction for PIPE character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.PIPE,
      direction: DIRECTION.DOWN,
    });
    expect(result).toEqual({
      directions: [DIRECTION.DOWN],
      character: POSSIBLE_CHARACTERS.PIPE,
    });
  });

  it("should return directions based on the given direction for TURN character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.TURN,
      direction: DIRECTION.RIGHT,
    });
    expect(result).toEqual({
      directions: [DIRECTION.UP, DIRECTION.DOWN],
      character: POSSIBLE_CHARACTERS.TURN,
    });
  });

  it("should return empty directions for END character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.END,
    });
    expect(result).toEqual({
      directions: [],
      character: POSSIBLE_CHARACTERS.END,
    });
  });
});

describe("Test findCharacterDirection function", () => {
  it("should return all directions for START character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.START,
    });
    expect(result).toEqual({
      directions: allDirections,
      character: POSSIBLE_CHARACTERS.START,
    });
  });

  it("should return specified direction for DASH character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.DASH,
      direction: DIRECTION.UP,
    });
    expect(result).toEqual({
      directions: [DIRECTION.UP],
      character: POSSIBLE_CHARACTERS.DASH,
    });
  });

  it("should return specified direction for PIPE character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.PIPE,
      direction: DIRECTION.DOWN,
    });
    expect(result).toEqual({
      directions: [DIRECTION.DOWN],
      character: POSSIBLE_CHARACTERS.PIPE,
    });
  });

  it("should return directions based on the given direction for TURN character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.TURN,
      direction: DIRECTION.RIGHT,
    });
    expect(result).toEqual({
      directions: [DIRECTION.UP, DIRECTION.DOWN],
      character: POSSIBLE_CHARACTERS.TURN,
    });
  });

  it("should return empty directions for END character", () => {
    const result = findCharacterDirection({
      character: POSSIBLE_CHARACTERS.END,
    });
    expect(result).toEqual({
      directions: [],
      character: POSSIBLE_CHARACTERS.END,
    });
  });
});
