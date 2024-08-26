const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header className="todoInput">
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter new task..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
