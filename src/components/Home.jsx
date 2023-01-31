import React from 'react';

function Home(props) {
  return (
    <div>
      <p className="title">Список книг</p>
      <ul className="books">{props.book}</ul>
    </div>
  );
}

export default Home;
