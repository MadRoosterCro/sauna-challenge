import * as fs from "fs";
import * as path from "path";

import { TItem } from "./types";
import { getCharacterPath } from "./helpers/characterPath";
import { findStartingPosition } from "./pathFinder/findStartingPosition";
import { pathFinder } from "./pathFinder";
import { getMap, parseMap } from "./helpers/map";
import { concatenateMapPositionValues } from "./helpers/trackPositionDuplication";

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
