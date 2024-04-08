import * as fs from "fs";
import * as path from "path";

import { TItem } from "./types";
import { getCharacterPath } from "./utils/characterPath";
import { findStartingPosition } from "./pathFinder/findStartingPosition";
import { pathFinder } from "./pathFinder";
import { getMap, parseMap } from "./utils/map";
import { concatenateMapPositionValues } from "./utils/trackPositionDuplication";

const filePath = path.join("src", "data", "map1.txt");

const mapVariant = fs.readFileSync(filePath, {
  encoding: "utf8",
});

const startThePath = () => {
  parseMap(mapVariant);

  const map = getMap();

  const startingElement = findStartingPosition(map) as TItem;

  pathFinder(startingElement);

  console.log(
    "Collected letters:",
    concatenateMapPositionValues(),
    "\nPath as characters:",
    getCharacterPath()
  );
};

startThePath();
