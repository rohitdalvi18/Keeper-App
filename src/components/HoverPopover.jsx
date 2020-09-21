import React, { useState } from "react";
import Colors from "./Colors";
import Popover from "material-ui-popup-state/HoverPopover";
import Fab from "@material-ui/core/Fab";
import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";
import PaletteIcon from "@material-ui/icons/Palette";

const DEFAULT_COLOR = "red";
const COLORS = [
  "red",
  "yellow",
  "cyan",
  "pink",
  "green",
  "aqua",
  "aliceblue",
  "orange",
  "beige",
  "crimson",
  "darkgray",
  "darkseagreen",
];

const HoverPopoverPopupState = ({ classes }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR);

  return (
    <div className="box" style={{ backgroundColor: selectedColor }}>
      <Fab variant="extended" {...bindHover(popupState)}>
        <PaletteIcon />
      </Fab>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <div className="color-palette">
          {COLORS.map((color) => (
            <Colors
              key={color}
              selected={selectedColor === color}
              onClick={setSelectedColor}
              color={color}
            />
          ))}
        </div>
      </Popover>
    </div>
  );
};
export default HoverPopoverPopupState;
