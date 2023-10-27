import React, { useState } from "react";
import "./OpenClick.css";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames";

function OpenClick({ props }) {
  const [open, setOpen] = useState(false);

  console.log(props);

  return (
    <div className="open-click-container">
      <div
        className="title"
      >
        <h5>{props.title}</h5>
        <AddIcon
          className={classNames("add-icon", { "rotate-open": open })}
          onClick={() => {
            setOpen((open) => {
              return !open;
            });
          }}
        ></AddIcon>
      </div>
      <div
        className={classNames("open-description-open", { "open-desc": open })}
      >
      <p>{props.description}</p>  
      </div>
    </div>
  );
}

export default OpenClick;
