import React from "react";
import HoverPopover from "./HoverPopover";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{ backgroundColor: "selectedColor" }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}>
        <DeleteIcon fontSize="small" />
      </Fab>
      <HoverPopover />
    </div>
  );
}

export default Note;
