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
import DeleteIcon from "@material-ui/icons/Delete";

const DEFAULT_COLOR = "#fff";
const COLORS = [
  "#fff",
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
  "#fdcfe8",
  "#e6c9a8",
  "#e8eaed",
];

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR);

  return (
    <div className="note" style={{ backgroundColor: selectedColor }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}>
        <DeleteIcon fontSize="small" />
      </Fab>
      <Fab variant="extended" {...bindHover(popupState)}>
        <PaletteIcon fontSize="small" />
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
}

let note = document.getElementsByClassName("note");

export default Note;
