import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, deleteItem, toggleTodo }) {
  return (
    <ul className="list">
      {todoItems.length === 0 && <p className="empty">No items</p>}
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
          deleteItem={deleteItem}
          toggleTodo={toggleTodo}
        />
      ))}
      {/* <li>
          <label htmlFor="task1">
            <input type="checkbox" name="task1" id="task1" /> Buy groceries
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label htmlFor="task2">
            <input type="checkbox" name="task2" id="task2" /> Walk the dog
          </label>
          <button className="btn btn-danger">Delete</button>
        </li> */}
    </ul>
  );
}
