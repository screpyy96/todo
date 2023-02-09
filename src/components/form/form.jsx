import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const TodoForm = ({ onAddTodo }) => {
  const classes = useStyles();
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAddTodo(content);
    setContent('');
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="content"
        label="Todo"
        className={classes.textField}
        value={content}
        onChange={event => setContent(event.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
