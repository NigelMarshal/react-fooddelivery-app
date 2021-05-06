import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Dishes from './components/Dishes/Dishes'

const App = () => {

  const [menuItems, setMenuData] = useState([]);

  const fetchMenu = () => {
    fetch("").then(
      (response) => response.json()).then((data) => {
        setMenuData(data);
      })
  }

  useEffect(() => {
    fetchMenu();
  }, [])

  console.log(menuItems);

  return (
    <div className="App">
      <Header />
      <Search />
      <Dishes menuItems={menuItems} />
    </div>
  );
}

export default App;
