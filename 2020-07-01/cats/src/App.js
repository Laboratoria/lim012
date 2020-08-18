import React, { useState } from 'react';
import './App.css';
import CatList from './components/CatList';

function App() {
  const [cats, setCats] = useState([]);

  const addCat = () => {
    fetch('https://cataas.com/cat', { cache: 'no-store' })
      .then(resp => resp.blob())
      .then(blob => setCats(cats => cats.concat(blob)))
      .catch(console.error);
  };

  const removeCat = (idx) => {
    setCats(cats => cats.filter((cat, i) => i !== idx));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gatitos</h1>
      </header>
      <main>
        <button onClick={addCat}>Agregar gatito</button>
        <CatList cats={cats} removeCat={removeCat} />
      </main>
    </div>
  );
}

export default App;
