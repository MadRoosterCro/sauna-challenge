import { DIRECTION, TDirection } from "../../constants";
import { TItem } from "../../types";

export const changeDirections = ({
  previousDirection,
}: Pick<TItem, "previousDirection"> & {
  previousDirection: TDirection;
}): TDirection[] => {
  const possibleDirections: Record<string, TDirection[]> = {
    [DIRECTION.RIGHT]: [DIRECTION.UP, DIRECTION.DOWN],
    [DIRECTION.LEFT]: [DIRECTION.UP, DIRECTION.DOWN],
    [DIRECTION.UP]: [DIRECTION.LEFT, DIRECTION.RIGHT],
    [DIRECTION.DOWN]: [DIRECTION.LEFT, DIRECTION.RIGHT],
  };

  return possibleDirections[previousDirection];
};
