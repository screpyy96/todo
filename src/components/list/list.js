import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ todos, onDeleteTodo, onEditTodo, onToggleTodo }) => {
  const classes = useStyles();
  const [editingId, setEditingId] = React.useState(null);
  const [content, setContent] = React.useState("");

  const handleDelete = (id) => {
    onDeleteTodo(id);
    setEditingId(null);
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setContent(todos[id].content);
  };

  const handleSave = (id) => {
    onEditTodo(id, content);
    setEditingId(null);
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      handleSave(id);
    }
  };

  return (
    <List className={classes.root}>
      {Object.entries(todos).map(([id, todo]) => (
        <ListItem key={id} dense button onClick={() => onToggleTodo(id)}>
          <Checkbox checked={todo.completed} />
          <ListItemText
            primary={
              editingId === id ? (
                <TextField
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  onKeyDown={(event) => handleKeyDown(event, id)}
                />
              ) : (
                todo.content
              )
            }
          />
          <ListItemSecondaryAction>
            {editingId === id ? (
              <>
                <IconButton
                  edge="end"
                  aria-label="save"
                  onClick={() => handleSave(id)}
                >
                  <Add />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            ) : (
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEdit(id)}
              >
                <EditIcon />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
