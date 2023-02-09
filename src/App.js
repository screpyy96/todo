import TodoForm from './components/form/form';
import TodoList from './components/list/list';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './store/todoActions';

const App = () => {
  const todos = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleAddTodo = content => {
    dispatch(addTodo(content));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, content) => {
    dispatch(editTodo(id, content));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
        onToggleTodo={handleToggleTodo}
      />
    </>
  );
};

export default App;
