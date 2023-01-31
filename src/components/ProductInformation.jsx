import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductInformation({ addBooks, setAddBooks }) {
  const params = useParams();
  const book = addBooks.find((x) => x.id === params.id);

  const [addComment, setAddComment] = useState('');

  function newCom(value) {
    const newBook = addBooks.map((bookComment) => {
      if (bookComment.id === book.id) {
        let obj = {
          id: book.id,
          name: book.name,
          description: book.description,
          comments: book.comments,
        };
        obj.comments.push(value);
        return obj;
      } else {
        return bookComment;
      }
    });

    setAddBooks(newBook);
    console.log(addBooks);
    setAddComment('');
  }

  const comments = book.comments.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div>
      <p> Название: {book.name}</p>
      <p> Описание: {book.description}</p>
      <input
        placeholder="создать отзыв"
        value={addComment}
        type="text"
        onChange={(event) => setAddComment(event.target.value)}
      />
      <button onClick={() => newCom(addComment)}>создать</button>
      <p>{comments}</p>
    </div>
  );
}

export default ProductInformation;
