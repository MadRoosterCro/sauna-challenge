import { changeDirections } from ".";
import { DIRECTION, TDirection } from "../../constants";

describe("Test changeDirection function, functions implements cross road logic", () => {
  it("should return [DIRECTION.UP, DIRECTION.DOWN] when previousDirection is DIRECTION.RIGHT", () => {
    const element = {
      previousDirection: DIRECTION.RIGHT,
      position: {
        row: 10,
        column: 10,
      },
      character: "-",
    };

    const result = changeDirections(element);

    expect(result).toEqual([DIRECTION.UP, DIRECTION.DOWN]);
  });

  it("should return [DIRECTION.UP, DIRECTION.DOWN] when previousDirection is DIRECTION.LEFT", () => {
    const element = {
      previousDirection: DIRECTION.LEFT,
      position: {
        row: 10,
        column: 10,
      },
      character: "-",
    };

    const result = changeDirections(element);

    expect(result).toEqual([DIRECTION.UP, DIRECTION.DOWN]);
  });

  it("should return [DIRECTION.LEFT, DIRECTION.RIGHT] when previousDirection is DIRECTION.UP", () => {
    const element = {
      previousDirection: DIRECTION.UP,
      position: {
        row: 10,
        column: 10,
      },
      character: "|",
    };

    const result = changeDirections(element);

    expect(result).toEqual([DIRECTION.LEFT, DIRECTION.RIGHT]);
  });

  it("should return [DIRECTION.LEFT, DIRECTION.RIGHT] when previousDirection is DIRECTION.DOWN", () => {
    const element = {
      previousDirection: DIRECTION.DOWN,
      position: {
        row: 10,
        column: 10,
      },
      character: "|",
    };

    const result = changeDirections(element);

    expect(result).toEqual([DIRECTION.LEFT, DIRECTION.RIGHT]);
  });

  it("should return undefined when previousDirection is invalid", () => {
    const element = {
      previousDirection: "INVALID_DIRECTION" as TDirection,
      position: {
        row: 10,
        column: 10,
      },
      character: "|",
    };

    const result = changeDirections(element);

    expect(result).toBeUndefined();
  });
});
