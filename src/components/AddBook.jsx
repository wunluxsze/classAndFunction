import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

function AddBook({ book, newObj }) {
  let [value, setValue] = useState();
  let [description, setDescription] = useState();

  return (
    <div>
      <input
        placeholder="Название"
        value={value}
        type="text"
        onChange={(event) => setValue(event.target.value)}
      />
      <input
        placeholder="Описание"
        value={description}
        type="text"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={() => newObj(value, description)}>создать</button>
      <div>{book}</div>
    </div>
  );
}

export default AddBook;
