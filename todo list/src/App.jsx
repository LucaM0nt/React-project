import { useEffect, useState } from "react";
import NewItemForm from "./NewItemForm";
import "./styles.css";
import TodoList from "./TodoList";

export default function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const localValues = localStorage.getItem("ITEMS");
    return localValues ? JSON.parse(localValues) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoItems));
  }, [todoItems]);

  function addItem(text) {
    setTodoItems([
      ...todoItems,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  }

  function deleteItem(id) {
    setTodoItems(todoItems.filter((i) => i.id !== id));
  }

  function toggleTodo(id) {
    setTodoItems(
      todoItems.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i,
      ),
    );
  }

  return (
    <>
      <NewItemForm addItem={addItem} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todoItems={todoItems}
        deleteItem={deleteItem}
        toggleTodo={toggleTodo}
      />
    </>
  );
}
