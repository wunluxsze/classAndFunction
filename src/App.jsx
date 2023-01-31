import './App.css';
import Home from './components/Home';
import AddBook from './components/AddBook';
import { v1 as uuidv1 } from 'uuid';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import ProductInformation from './components/ProductInformation';
import './components/style.css';

function App() {
  const books = [
    {
      id: uuidv1(),
      name: 'Токийский гуль',
      description: 'Для настоящих дед инсайдов',
      comments: [],
    },
    { id: uuidv1(), name: 'Атака титанов', description: 'для низких людей', comments: [] },
    {
      id: uuidv1(),
      name: 'Не придумал книгу',
      description: 'фантазии не хватило',
      comments: [],
    },
  ];

  const [addBooks, setAddBooks] = useState(books);

  function newObj(value, description) {
    let copy = {
      id: uuidv1(),
      name: value,
      description: description,
      comments: [],
    };
    setAddBooks([...addBooks, copy]);
    console.log(addBooks);
  }

  const book = addBooks.map((item, index) => {
    return (
      <li key={index}>
        <Link to={`/product/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  return (
    <Router>
      <div className="container">
        <header>
          <Link className="link" to="/">
            Домой
          </Link>
        </header>
        <div>
          <nav>
            <div>
              <p>
                <Link className="link" to="/about">
                  О сайте
                </Link>
              </p>
            </div>
            <div>
              <p>
                <Link className="link" to="/addbook">
                  Добавить книгу
                </Link>
              </p>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home book={book} />} />
            <Route path="/addbook" element={<AddBook book={book} newObj={newObj} />} />
            <Route path="/about" element={<About />} />
            <Route
              path={`/product/:id`}
              element={<ProductInformation addBooks={addBooks} setAddBooks={setAddBooks} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
