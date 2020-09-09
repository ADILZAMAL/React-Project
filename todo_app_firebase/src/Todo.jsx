import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Modal,
  Input,
} from "@material-ui/core";
import { db } from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);
  const handleClose = () => {};

  const onClickHandler = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>Modal</h1>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button onClick={onClickHandler}>Update Todo</Button>
        </div>
      </Modal>
      <ListItem dense={true}>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="dummy deadline" />
        <DeleteIcon
          onClick={(event) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
          color="secondary"
        ></DeleteIcon>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
      </ListItem>
    </div>
  );
}

export default Todo;
