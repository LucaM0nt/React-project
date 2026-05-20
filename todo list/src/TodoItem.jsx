export default function TodoItem({
  id,
  text,
  completed,
  deleteItem,
  toggleTodo,
}) {
  return (
    <li key={id}>
      <label htmlFor={`task${id}`}>
        <input
          type="checkbox"
          name={`task${id}`}
          id={`task${id}`}
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        {text}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
