import React from "react";
import DoneIcon from "@material-ui/icons/Done";

function Colors(props) {
  return (
    <div
      className="colors"
      onClick={() => props.onClick(props.color)}
      style={{ backgroundColor: props.color }}
    >
      {props.selected && <DoneIcon fontSize="small" />}
    </div>
  );
}

export default Colors;
