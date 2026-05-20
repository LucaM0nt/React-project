import { useState } from "react";

export default function NewItemForm({ addItem }) {
  const [newItem, setNewItems] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addItem(newItem);
    setNewItems("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        id="item"
        placeholder="Add a new task"
        value={newItem}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
