import React from "react";
import { TilesWrapper } from "./TileContainerElements";
import Tile from "./Tile.js";
import { colors } from "../../utilities";

const tileColors = [
  colors.amaranth_purple,
  colors.atomic_tangerine,
  colors.cosmic_latte,
  colors.kombu_green,
  colors.cambridge_blue,
  colors.peach_puff,
];

const TileContainer = () => {
  return (
    <TilesWrapper>
      {tileColors.map((color, idx) => {
        return <Tile key={idx} color={color}></Tile>;
      })}
    </TilesWrapper>
  );
};

export default TileContainer;
