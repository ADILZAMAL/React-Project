import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
function Todo(props) {
  return (
    <div>
      <ListItem dense={true}>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.txt} secondary="dummy deadline" />
      </ListItem>
    </div>
  );
}

export default Todo;
