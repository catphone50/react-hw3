import { useState } from "react";
import styles from "./List.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },

    { id: 2, name: "Мария", age: 22 },

    { id: 3, name: "Алексей", age: 21 },

    { id: 4, name: "Марина", age: 19 },

    { id: 5, name: "Даша", age: 23 },

    { id: 6, name: "Глеб", age: 24 },

    { id: 7, name: "Дима", age: 18 },

    { id: 8, name: "Гриша", age: 20 },

    { id: 9, name: "Серафим", age: 21 },
  ]);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className={styles.list}>
      {people.map((person, index) => {
        return (
          <div key={person.id}>
            <p>{index + 1}.</p>
            <p>{person.name}</p>
            <button onClick={() => removePerson(person.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
