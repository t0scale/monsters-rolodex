import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, []);

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox
      placeholder='search monsters'
      handleChange={e => {setSearchField(e.target.value)}}
      value={searchField}
    />
    <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
