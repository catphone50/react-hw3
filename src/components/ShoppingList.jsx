import React from "react";

function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      {items.length === 0 ? (
        <p>Список покупок пуст</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
